<template>
    <section id="about" class="container mx-auto mt-20 space-y-8">
        <h1 class="text-5xl font-bold text-center">About Me</h1>
        <div class="space-y-5 xl:flex xl:gap-20 xl:justify-center xl:items-center xl:space-y-0">
            <div class="rounded-xl mx-auto px-6 py-5 border-2 border-neutral-300 max-w-120">
                <img src="@/assets/images/education.png" alt="Education Picture" class="max-w-10 mx-auto"/>
                <h2 class="text-xl font-bold text-center mt-3">Education</h2>
                <div class="overflow-y-auto mt-4 h-72">
                    <ol class="relative border-s border-neutral-200 dark:border-neutral-700">                  
                        <li class="mb-10 ms-4">
                            <div class="absolute w-3 h-3 bg-neutral-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-neutral-900 dark:bg-neutral-700"></div>
                            <time class="mb-1 text-sm font-normal leading-none text-neutral-400 dark:text-neutral-500">September 2015 - June 2020</time>
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">High School Diploma</h3>
                            <p class="text-base font-normal text-neutral-500 dark:text-neutral-400">Liceo Scientifico "A. Ròiti"</p>
                            <p class="mb-4 text-base font-normal text-neutral-500 dark:text-neutral-400">Ferrara</p>
                        </li>
                        <li class="mb-10 ms-4">
                            <div class="absolute w-3 h-3 bg-neutral-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-neutral-900 dark:bg-neutral-700"></div>
                            <time class="mb-1 text-sm font-normal leading-none text-neutral-400 dark:text-neutral-500">September 2020 - September 2023</time>
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Bachelor's Degree in Electronics and Computer Engineering</h3>
                            <p class="mb-4 text-base font-normal text-neutral-500 dark:text-neutral-400">University of Ferrara</p>
                            <p class="mb-4 text-base font-normal text-neutral-500 dark:text-neutral-400">Thesis: <strong>Classificazione di post no-vax con tecniche di Machine Learning</strong></p>
                        </li>
                        <li class="mb-10 ms-4">
                            <div class="absolute w-3 h-3 bg-neutral-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-neutral-900 dark:bg-neutral-700"></div>
                            <time class="mb-1 text-sm font-normal leading-none text-neutral-400 dark:text-neutral-500">September 2023 - Present</time>
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Master's Degree in Artificial Intelligence and Data Engineering</h3>
                            <p class="mb-4 text-base font-normal text-neutral-500 dark:text-neutral-400">University of Pisa</p>
                        </li>
                    </ol>
                </div>
            </div>
            <div id="experience" class="rounded-xl mx-auto px-6 py-5 border-2 border-neutral-300 max-w-120">
                <img src="@/assets/images/experience.png" alt="Experience Picture" class="max-w-10 mx-auto"/>
                <h2 class="text-xl font-bold text-center mt-3">Experience</h2>
                <div class="overflow-y-auto mt-4 h-72">
                    <ol class="relative border-s border-neutral-200 dark:border-neutral-700">
                        <li class="mb-10 ms-4">
                            <div class="absolute w-3 h-3 bg-neutral-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-neutral-900 dark:bg-neutral-700"></div>
                            <time class="mb-1 text-sm font-normal leading-none text-neutral-400 dark:text-neutral-500">July 2025 - Present</time>
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Master Thesis Intern </h3>
                            <p class="text-base font-normal text-neutral-500 dark:text-neutral-400">3logic MK srl</p>
                            <p class="mb-4 text-base font-normal text-neutral-500 dark:text-neutral-400">Pisa</p>
                            <p class="text-base font-normal text-neutral-500 dark:text-neutral-400"><strong>Evaluation of a Neural Network Training Process via the Distilling Step-by-Step Paradigm </strong></p>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    </section>
</template>