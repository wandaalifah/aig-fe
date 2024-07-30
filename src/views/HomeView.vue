<script setup>
import UserLayout from '@/layouts/UserLayout.vue';
</script>

<template>
  <UserLayout>
    <div class="flex justify-between items-center">
      <p class="font-bold text-purple-700 text-xl">Data Penjualan</p>
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
    <div class="flex gap-6 mt-6">
      <div class="w-1/2 bg-white p-4 rounded-2xl max-h-96">
        <div>
          <p class="font-bold text-purple-700">Top 10 Brand</p>
          <p class="text-sm text-purple-700">Brand yang paling banyak terjual</p>
        </div>
        <div class="overflow-y-auto h-80">
          <!-- 1 row -->
          <div class="flex justify-between mt-4 pb-4 border-b-2">
            <div class="flex">
              <p class="font-bold mr-8">1.</p>
              <div>
                <p class="font-bold">Nama Product / buyer</p>
                <p class="text-sm text-gray-300">Deskripsi product / nomor buyer</p>
              </div>
            </div>
            <p class="text-sm text-gray-300">100x transaksi</p>
          </div>
          <!-- 1 row -->
          <div class="flex justify-between mt-4 pb-4 border-b-2">
            <div class="flex">
              <p class="font-bold mr-8">1.</p>
              <div>
                <p class="font-bold">Nama Product / buyer</p>
                <p class="text-sm text-gray-300">Deskripsi product / nomor buyer</p>
              </div>
            </div>
            <p class="text-sm text-gray-300">100x transaksi</p>
          </div>
          <!-- 1 row -->
          <div class="flex justify-between mt-4 pb-4 border-b-2">
            <div class="flex">
              <p class="font-bold mr-8">1.</p>
              <div>
                <p class="font-bold">Nama Product / buyer</p>
                <p class="text-sm text-gray-300">Deskripsi product / nomor buyer</p>
              </div>
            </div>
            <p class="text-sm text-gray-300">100x transaksi</p>
          </div>
          <!-- 1 row -->
          <div class="flex justify-between mt-4 pb-4 border-b-2">
            <div class="flex">
              <p class="font-bold mr-8">1.</p>
              <div>
                <p class="font-bold">Nama Product / buyer</p>
                <p class="text-sm text-gray-300">Deskripsi product / nomor buyer</p>
              </div>
            </div>
            <p class="text-sm text-gray-300">100x transaksi</p>
          </div>
          <!-- 1 row -->
          <div class="flex justify-between mt-4 pb-4 border-b-2">
            <div class="flex">
              <p class="font-bold mr-8">1.</p>
              <div>
                <p class="font-bold">Nama Product / buyer</p>
                <p class="text-sm text-gray-300">Deskripsi product / nomor buyer</p>
              </div>
            </div>
            <p class="text-sm text-gray-300">100x transaksi</p>
          </div>
          <!-- 1 row -->
          <div class="flex justify-between mt-4 pb-4 border-b-2">
            <div class="flex">
              <p class="font-bold mr-8">1.</p>
              <div>
                <p class="font-bold">Nama Product / buyer</p>
                <p class="text-sm text-gray-300">Deskripsi product / nomor buyer</p>
              </div>
            </div>
            <p class="text-sm text-gray-300">100x transaksi</p>
          </div>
          <!-- 1 row -->
          <div class="flex justify-between mt-4 pb-4 border-b-2">
            <div class="flex">
              <p class="font-bold mr-8">1.</p>
              <div>
                <p class="font-bold">Nama Product / buyer</p>
                <p class="text-sm text-gray-300">Deskripsi product / nomor buyer</p>
              </div>
            </div>
            <p class="text-sm text-gray-300">100x transaksi</p>
          </div>
        </div>
      </div>
      <div class="w-1/2 bg-white p-4 rounded-2xl max-h-96">
        <div>
          <p class="font-bold text-purple-700">Top 10 Buyer</p>
          <p class="text-sm text-purple-700">Customer kamu yang paling sering beli</p>
        </div>
        <div class="overflow-y-auto h-80">
          <!-- 1 row -->
          <div class="flex justify-between mt-4 pb-4 border-b-2">
            <div class="flex">
              <p class="font-bold mr-8">1.</p>
              <div>
                <p class="font-bold">Nama Product / buyer</p>
                <p class="text-sm text-gray-300">Deskripsi product / nomor buyer</p>
              </div>
            </div>
            <p class="text-sm text-gray-300">100x transaksi</p>
          </div>
          <!-- 1 row -->
          <div class="flex justify-between mt-4 pb-4 border-b-2">
            <div class="flex">
              <p class="font-bold mr-8">1.</p>
              <div>
                <p class="font-bold">Nama Product / buyer</p>
                <p class="text-sm text-gray-300">Deskripsi product / nomor buyer</p>
              </div>
            </div>
            <p class="text-sm text-gray-300">100x transaksi</p>
          </div>
          <!-- 1 row -->
          <div class="flex justify-between mt-4 pb-4 border-b-2">
            <div class="flex">
              <p class="font-bold mr-8">1.</p>
              <div>
                <p class="font-bold">Nama Product / buyer</p>
                <p class="text-sm text-gray-300">Deskripsi product / nomor buyer</p>
              </div>
            </div>
            <p class="text-sm text-gray-300">100x transaksi</p>
          </div>
          <!-- 1 row -->
          <div class="flex justify-between mt-4 pb-4 border-b-2">
            <div class="flex">
              <p class="font-bold mr-8">1.</p>
              <div>
                <p class="font-bold">Nama Product / buyer</p>
                <p class="text-sm text-gray-300">Deskripsi product / nomor buyer</p>
              </div>
            </div>
            <p class="text-sm text-gray-300">100x transaksi</p>
          </div>
          <!-- 1 row -->
          <div class="flex justify-between mt-4 pb-4 border-b-2">
            <div class="flex">
              <p class="font-bold mr-8">1.</p>
              <div>
                <p class="font-bold">Nama Product / buyer</p>
                <p class="text-sm text-gray-300">Deskripsi product / nomor buyer</p>
              </div>
            </div>
            <p class="text-sm text-gray-300">100x transaksi</p>
          </div>
          <!-- 1 row -->
          <div class="flex justify-between mt-4 pb-4 border-b-2">
            <div class="flex">
              <p class="font-bold mr-8">1.</p>
              <div>
                <p class="font-bold">Nama Product / buyer</p>
                <p class="text-sm text-gray-300">Deskripsi product / nomor buyer</p>
              </div>
            </div>
            <p class="text-sm text-gray-300">100x transaksi</p>
          </div>
          <!-- 1 row -->
          <div class="flex justify-between mt-4 pb-4 border-b-2">
            <div class="flex">
              <p class="font-bold mr-8">1.</p>
              <div>
                <p class="font-bold">Nama Product / buyer</p>
                <p class="text-sm text-gray-300">Deskripsi product / nomor buyer</p>
              </div>
            </div>
            <p class="text-sm text-gray-300">100x transaksi</p>
          </div>
        </div>
      </div>
    </div>
  </UserLayout>
</template>
