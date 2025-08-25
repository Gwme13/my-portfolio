<template>
    <section id="skills" class="container mx-auto mt-20 space-y-8">
        <h1 class="text-5xl font-bold text-center">Acquired Skills</h1>
        <div class="flex justify-between gap-20 overflow-x-auto px-8">
            <div v-for="(skillList, category) in skillsByCategory" :key="category" class="text-center shrink-0">
                <h2 class="text-xl font-bold mt-3">{{ category }}</h2>
                <ul class="list-disc list-inside text-neutral-500 mt-3 text-justify">
                    <li v-for="skill in skillList" :key="skill" class="hover:text-black">
                        {{ skill }}
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script setup>

import { ref, computed } from 'vue';

const allSkills = ref([
  // Programming Languages
  { name: 'Python', category: '🧑‍💻 Programming Languages' },
  { name: 'Java', category: '🧑‍💻 Programming Languages' },
  { name: 'C', category: '🧑‍💻 Programming Languages' },
  { name: 'JavaScript', category: '🧑‍💻 Programming Languages' },
  { name: 'SQL', category: '🧑‍💻 Programming Languages' },
  { name: 'R', category: '🧑‍💻 Programming Languages' },
  { name: 'MATLAB', category: '🧑‍💻 Programming Languages' },

  // Artificial Intelligence & Machine Learning
  { name: 'Artificial Intelligence', category: '🧠 Artificial Intelligence & Machine Learning' },
  { name: 'Machine Learning', category: '🧠 Artificial Intelligence & Machine Learning' },
  { name: 'Deep Learning', category: '🧠 Artificial Intelligence & Machine Learning' },
  { name: 'Computer Vision', category: '🧠 Artificial Intelligence & Machine Learning' },
  { name: 'NLP (Natural Language Processing)', category: '🧠 Artificial Intelligence & Machine Learning' },
  { name: 'Information Retrieval', category: '🧠 Artificial Intelligence & Machine Learning' },
  { name: 'Scikit-learn', category: '🧠 Artificial Intelligence & Machine Learning' },
  { name: 'PyTorch', category: '🧠 Artificial Intelligence & Machine Learning' },
  { name: 'Pandas', category: '🧠 Artificial Intelligence & Machine Learning' },
  { name: 'Numpy', category: '🧠 Artificial Intelligence & Machine Learning' },
  { name: 'OpenCV', category: '🧠 Artificial Intelligence & Machine Learning' },
  { name: 'Hugging Face', category: '🧠 Artificial Intelligence & Machine Learning' },
  { name: 'LangChain', category: '🧠 Artificial Intelligence & Machine Learning' },
  { name: 'LangGraph', category: '🧠 Artificial Intelligence & Machine Learning' },
  { name: 'Ollama', category: '🧠 Artificial Intelligence & Machine Learning' },

  // Web Development
  { name: 'HTML', category: '🌐 Web Development' },
  { name: 'CSS', category: '🌐 Web Development' },
  { name: 'Vue.js', category: '🌐 Web Development' },
  { name: 'Tailwind CSS', category: '🌐 Web Development' },
  { name: 'FastAPI', category: '🌐 Web Development' },
  
  // Data Science & Visualization
  { name: 'Data Visualization', category: '📊 Data Science & Visualization' },
  { name: 'Jupyter Notebook', category: '📊 Data Science & Visualization' },
  { name: 'Matplotlib', category: '📊 Data Science & Visualization' },
  { name: 'Seaborn', category: '📊 Data Science & Visualization' },
  { name: 'Google Colab', category: '📊 Data Science & Visualization' },
  { name: 'Anaconda', category: '📊 Data Science & Visualization' },

  // Development Tools & Platforms
  { name: 'Git', category: '🛠️ Development Tools & Platforms' },
  { name: 'Github', category: '🛠️ Development Tools & Platforms' },
  { name: 'Docker', category: '🛠️ Development Tools & Platforms' },
  { name: 'Linux', category: '🛠️ Development Tools & Platforms' },
  
  // Databases
  { name: 'MySQL', category: '🗃️ Databases' },
  { name: 'MongoDB', category: '🗃️ Databases' },
  { name: 'Neo4j', category: '🗃️ Databases' },
  {name: 'SQLite', category: '🗃️ Databases' },

  // Concepts & Paradigms
  { name: 'Object-Oriented Programming (OOP)', category: '💡 Concepts & Paradigms' },

  // Soft & General Skills
  { name: 'Team Working', category: '👥 Soft & General Skills' },
  { name: 'Problem Solving', category: '👥 Soft & General Skills' },
  { name: 'Adaptability', category: '👥 Soft & General Skills' },
  { name: 'Autonomy', category: '👥 Soft & General Skills' },
  { name: 'Precision', category: '👥 Soft & General Skills' },
  { name: 'Versatility', category: '👥 Soft & General Skills' },
  { name: 'Availability', category: '👥 Soft & General Skills' },
  { name: 'Good command of the PC, related software and the Oﬃce package', category: '👥 Soft & General Skills' },
  { name: 'Good command of technological devices', category: '👥 Soft & General Skills' },
]);


const skillsByCategory = computed(() => {
  return allSkills.value.reduce((groups, skill) => {
    const category = skill.category;
    // If the category doesn't exist yet in the 'groups' object, create it as an empty array
    if (!groups[category]) {
      groups[category] = [];
    }
    // Push the skill's name into its category's array
    groups[category].push(skill.name);
    return groups;
  }, {});
});

</script>