<template>
  <div class="relative mb-[24px] sm:w-full md:w-[523px]">
    <span
      class="w-5 h-5 text-darkGray absolute top-[30px] ltr:left-[15px] rtl:right-[15px] cursor-auto"
    >
      <FontAwesomeIcon icon="fas fa-magnifying-glass" class="w-5 h-5" />
    </span>
    <input
      type="text"
      class="rounded-sm ltr:pl-[48px] rtl:pr-[50px] py-2 w-full placeholder-gray-500 h-[48px] focus:border-0 focus:outline-none border border-gray my-4"
      :placeholder="$t('SearchPosts')"
      @input="$emit('search', $event.target.value)"
    />
  </div>
</template>
