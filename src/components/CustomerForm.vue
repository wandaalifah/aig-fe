<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
    index: {
      type: Number,
      required: true,
    }
  },
};
</script>

<template>
    <div class="bg-white py-8 px-6 rounded-3xl">
        <div class="flex justify-end">
            <button @click="$emit('delete', index)">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-red-700">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </button>
        </div>
        <div class="space-y-2 mt-2">
            <p class="font-bold">Kode Barang</p>
            <input type="text" v-model="item.item_code" placeholder="Tulis Kode Barang" class="input input-bordered input-ghost w-4/5 rounded-xl" />
        </div>
        <div class="space-y-2 mt-6">
            <p class="font-bold">Harga Barang</p>
            <input type="number" v-model="item.price" placeholder="10000" class="input input-bordered input-ghost w-4/5 rounded-xl" />
        </div>
        <!-- <div class="space-y-2 mt-6">
            <p class="font-bold">Pilih Ukuran</p>
            <select v-model="item.size" class="select select-ghost w-full max-w-xs border-gray-200 border-1 rounded-xl">
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>
                <option value="xl">XL</option>
            </select>
        </div> -->
        <div class="space-y-2 mt-6">
            <p class="font-bold">Jumlah Barang</p>
            <div class="flex items-center border border-gray-300 w-fit">
                <button class="border-r border-gray-300 p-2 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                </svg>
                </button>
                <input v-model="item.qty" type="number" class="w-16 text-center border-r border-gray-300 py-2" style="" />
                <button class="p-2 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                </svg>
                </button>
            </div>
        </div>
    </div>
</template>