<template>
    <section id="projects" class="container mx-auto mt-20">
        <p class="text-lg text-neutral-400 text-center">Browse my last</p>
        <h1 class="text-5xl font-bold text-center">Projects</h1>
        <div class="h-40 overflow-x-auto flex items-center justify-around gap-20 px-4">
            <div v-for="repo in repositories" :key="repo.id" class="overflow-hidden shrink-0 rounded-lg border-2 border-neutral-300 px-5 py-2 transition hover:scale-105">
                <h3>
                    <a :href="repo.html_url" target="_blank" rel="noopener noreferrer" class="text-center text-lg font-semibold hover:underline hover:underline-offset-1">{{ repo.name }}</a>
                </h3>
                <div v-if="repo.languages && repo.languages.length > 0" class="mt-3">
                    <strong class="text-md">languages:</strong>
                    <span v-for="language in repo.languages" :key="language" class="inline-block bg-neutral-500 px-3 text-white text-sm rounded-xl ml-3">{{ language }}</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const repositories = ref([]);
const githubUsername = 'Gwme13';

onMounted(async () => {
  try {
    // 1. First phase: Get the list of repositories
    const reposResponse = await fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated&direction=desc`);
    if (!reposResponse.ok) {
      throw new Error('Failed to fetch repositories');
    }
    let reposData = await reposResponse.json();
    reposData = reposData.filter(repo => !repo.private && repo.name !== `${githubUsername}`); // Filter out private repos and the GitHub Pages repo.

    // 2. Second phase: Fetch languages for each repository
    // Create an array of promises for fetching languages
    const languagePromises = reposData.map(repo =>
      fetch(repo.languages_url).then(response => {
        if (!response.ok) return {}; // If the request fails, return an empty object
        return response.json();
      })
    );

    // 3. Wait for all language fetches to complete
    const languagesArray = await Promise.all(languagePromises);

    // 4. Combine the languages with the original repository data
    const combinedData = reposData.map((repo, index) => {
      return {
        ...repo, // Spread the original repository data
        languages: Object.keys(languagesArray[index]) // Extract language names
      };
    });

    repositories.value = combinedData;

  } catch (err) {
    console.error(err);
  }
});
</script>

