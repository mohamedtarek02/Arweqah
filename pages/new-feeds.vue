<script setup lang="ts">
definePageMeta({
  title: "New Feeds",
  layout: "home",
});
import { ref, onMounted } from "vue";

import { useInfinitePosts } from "@/composables/useFetchPosts";

const { posts: allPosts, isLoading, hasMore, loadMore } = useInfinitePosts();

function onScroll() {
  const nearBottom =
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 200;
  if (nearBottom) {
    loadMore();
  }
}

onMounted(async () => {
  await loadMore();
  searchHandler("");
  window.addEventListener("scroll", onScroll);
});

// Handling filtering posts
interface Post {
  id: number;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
}
const posts = ref<Post[]>([...allPosts.value]);
function searchHandler(search: string) {
  if (!allPosts.value) return;
  if (!search) {
    posts.value = allPosts.value;
  } else {
    posts.value = allPosts.value.filter(
      (post) => post.title.includes(search) || post.description.includes(search)
    );
  }
}
</script>

<template>
  <main class="container py-4">
    <h2>{{ $t("LatestContentTitle") }}</h2>
    <!-- Search Posts -->
    <FeedsSearch class="mb-4" @search="searchHandler" />
    <!-- Posts List -->

    <FeedsPost
      v-for="post in posts"
      :key="post.id"
      :id="post.id"
      :title="post.title"
      :description="post.description"
      :createdAt="post.created_at"
    />

    <BaseLoader v-if="isLoading" />
    <FeedsNoMorePosts v-if="!hasMore" />
  </main>
</template>
