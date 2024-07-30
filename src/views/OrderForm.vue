<script setup>
import UserLayout from '@/layouts/UserLayout.vue';
import CustomerForm from '@/components/CustomerForm.vue';
import { ref } from 'vue';
import { usePOsStore } from '@/stores/po';
import router from '@/router';

const POStore = usePOsStore()

const file = ref(null);
const items = ref([{}]);
const showToast = ref(false);
const showModal = ref(false);
const state = ref({
    invoice_company: '',
    invoice_address: '',
    delivery_address: '',
    address_product: '',
    customer_name: '',
    phone_number: '',
    email_customer: '',
    note: ''
})

const addMoreItem = () => {
    items.value.push({})
    showToast.value = true;
    setTimeout(() => {
        showToast.value = false;
    }, 3000);
}

const deleteItem = (index) => {
    items.value.splice(index, 1);
}

const handleFileUpload = (event) => {
    file.value = event.target.files[0]
}

const uploadFile = () => {
    try {
        POStore.uploadExcel(file.value).then((res) => {
            state.value.invoice_company = res.invoice_company
            state.value.invoice_address = res.invoice_address
            state.value.delivery_address = res.delivery_address
            state.value.address_product = res.address_product
            state.value.customer_name = res.customer_name
            state.value.phone_number = res.phone_number
            state.value.email_customer = res.email_customer
            items.value = res.items
            showModal.value = false
        })
    } catch (err) {
        console.log(err);
    }
}

const saveForm = () => {
    const payload = {...state.value, items: JSON.parse(JSON.stringify(items.value))}
    POStore.createPo(payload).then((res) => {
        if(res.code === 200){
            router.push('/')
        }
    })
}
</script>

<template>
    <UserLayout>
        <div class="flex justify-between items-center">
            <router-link :to="{name: 'order'}">
                <div class="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                    <p class="font-bold">Input data form</p>
                </div>
            </router-link>
            <div class="flex space-x-4">
                <button @click="addMoreItem" class="border-2 border-purple-700 text-purple-700 px-8 py-2 rounded-3xl flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    <p class="text-sm">Tambah Form</p>
                </button>
                <button @click="showModal = true" class="bg-purple-700 text-white px-8 py-2 rounded-3xl flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m6.75 12-3-3m0 0-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                    </svg>
                    <p class="text-sm">Import Data Excel</p>
                </button>
            </div>
        </div>
        <div class="bg-white w-full rounded-3xl mt-10 py-8 px-6">
            <div class="space-y-2">
                <p class="font-bold">Invoice Company</p>
                <input v-model="state.invoice_company" type="text" placeholder="Masukkan nama perusahaan" class="input input-bordered input-ghost w-3/5 rounded-xl" />
            </div>
            <div class="space-y-2 mt-4">
                <p class="font-bold">Delivery Address</p>
                <textarea v-model="state.delivery_address" type="text" placeholder="Masukkan alamat" class="textarea textarea-bordered textarea-ghost w-3/5 rounded-xl"></textarea>
            </div>
            <div class="space-y-2 mt-4">
                <p class="font-bold">Address On Product Labels</p>
                <textarea v-model="state.address_product" type="text" placeholder="Masukkan alamat" class="textarea textarea-bordered textarea-ghost w-3/5 rounded-xl"></textarea>
            </div>
            <div class="space-y-2 mt-4">
                <p class="font-bold">Name Customer</p>
                <input v-model="state.customer_name" type="text" placeholder="Masukkan nama customer" class="input input-bordered input-ghost w-3/5 rounded-xl" />
            </div>
            <div class="space-y-2 mt-4">
                <p class="font-bold">Nomor Telepon Customer</p>
                <input v-model="state.phone_number" type="text" placeholder="Masukkan nomor customer" class="input input-bordered input-ghost w-3/5 rounded-xl" />
            </div>
            <div class="space-y-2 mt-4">
                <p class="font-bold">Email Customer</p>
                <input v-model="state.email_customer" type="text" placeholder="Masukkan email customer" class="input input-bordered input-ghost w-3/5 rounded-xl" />
            </div>
        </div>
        <div class="mt-10">
            <p class="font-bold text-2xl">Additional Customer Details</p>
            <div class="grid grid-cols-2 grid-flow-row gap-x-6">
                <div v-for="(item, index) in items" :key="index" class="mt-4">
                    <CustomerForm :item="item" :index="index" @delete="deleteItem"/>
                </div>
            </div>
        </div>
        <div class="flex justify-end mt-6">
            <button @click="saveForm" class="py-2 px-20 bg-green-600 text-white rounded-3xl">
                <p class="text-sm font-bold">Simpan</p>
            </button>
        </div>
    </UserLayout>
    <!-- toast -->
    <div v-if="showToast" class="toast toast-top toast-center">
        <div class="alert alert-info text-white bg-purple-700">
            <p>Form baru ditambahkan</p>
        </div>
    </div>

    <!-- modal -->
    <dialog :open="showModal" class="modal">
      <div class="modal-box">
        <p class="text-lg font-bold">Upload Document PO</p>
        <div class="mt-4">
            <input type="file" @change="handleFileUpload($event)" class="file-input file-input-bordered w-full max-w-xs rounded-xl" />
        </div>
        <button @click="uploadFile()" class="bg-purple-700 text-white w-full py-2 rounded-xl mt-4">Submit</button>
      </div>
      <form method="dialog" class="modal-backdrop">
        <button @click="showModal = false">cancel</button>
      </form>
    </dialog>
</template>