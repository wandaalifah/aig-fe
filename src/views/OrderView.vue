<script setup>
import UserLayout from '@/layouts/UserLayout.vue';
import { usePOsStore } from '@/stores/po';

const POStore = usePOsStore()
POStore.getPo();
</script>

<template>
    <UserLayout>
            <div class="flex justify-end mb-4">
                <router-link :to="{name: 'orderForm'}">
                    <div class="bg-purple-700 text-white w-fit px-8 py-2 rounded-3xl flex items-center gap-2 font-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        <p class="text-sm">Input Data Order</p>
                    </div>
                </router-link>
            </div>
            <!-- table -->
            <div class="bg-white rounded-2xl">
                <div class="flex justify-between items-center py-4 px-6">
                    <p class="font-bold text-purple-700 text-xl">Daftar Pembeli</p>
                    <div>
                        <select class="select select-ghost w-full max-w-xs border-gray-200 border-1 pr-14">
                            <option>January</option>
                            <option>February</option>
                            <option>March</option>
                            <option>April</option>
                            <option>May</option>
                            <option>June</option>
                            <option>July</option>
                            <option>August</option>
                            <option>September</option>
                            <option>October</option>
                            <option>November</option>
                            <option>December</option>
                        </select>
                    </div>
                </div>
                <hr/>
                <div class="overflow-x-auto">
                    <table class="table table-zebra">
                        <thead>
                        <tr>
                            <th></th>
                            <th>Invoice Company</th>
                            <th>Invoice Address</th>
                            <th>Delivery Address</th>
                            <th>Customer Name</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody v-for="(po, index) in POStore.allPO" :key="index">
                        <tr>
                            <th>{{ index+1 }}</th>
                            <td>{{po.invoice_company}}</td>
                            <td>{{po.invoice_address}}</td>
                            <td>{{po.delivery_address}}</td>
                            <td>{{po.customer_name}}</td>
                            <td>{{po.phone_number}}</td>
                            <td>{{po.email_customer}}</td>
                            <td class="flex gap-2">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                    </svg>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 text-red-700">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="flex justify-end mt-2 px-6 py-4">
                    <div class="join">
                        <button class="join-item btn">1</button>
                        <button class="join-item btn btn-active">2</button>
                        <button class="join-item btn">3</button>
                        <button class="join-item btn">4</button>
                    </div>
                </div>
            </div>
    </UserLayout>
    <!-- modal -->
    <dialog id="my_modal_1" class="modal">
        <div class="modal-box">
            <h3 class="text-lg font-bold">Hello!</h3>
            <p class="py-4">Press ESC key or click the button below to close</p>
            <div class="modal-action">
            <form method="dialog">
                <!-- if there is a button in form, it will close the modal -->
                <button class="btn">Close</button>
            </form>
            </div>
        </div>
    </dialog>
</template>