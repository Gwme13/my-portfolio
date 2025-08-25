<template>
    <section id="profile" class="container mx-auto mt-5 space-y-4 xl:flex xl:gap-20 xl:justify-center xl:items-center xl:space-y-0">
        <img src="@/assets/images/profile.JPG" alt="Profile Picture" class="w-68 rounded-full shadow-lg xl:w-90 mx-auto"/>
        <div>
            <p class="text-center text-lg text-neutral-400 font-medium">Hello I'm</p>
            <h1 class="text-center text-3xl font-bold md:text-4xl">Mattia Gemelli</h1>
            <p class="text-center text-xl text-neutral-500 font-semibold  md:text-2xl">MSc student in Artificial Intelligente and Data Engineering</p>
            <div class="flex mt-4 gap-4 justify-center">
                <a href="Mattia_Gemelli_CV.pdf" download="Mattia_Gemelli_CV.pdf" class="rounded-2xl px-4 py-3 border border-black text-xs font-medium hover:bg-black hover:text-white">Download CV</a>
                <a href="#contact" class="rounded-2xl px-4 py-3 text-xs font-medium border border-neutral-800 bg-neutral-800 text-white hover:bg-black hover:border-black">Contact Info</a>
            </div>
            <div class="flex mt-4 gap-4 justify-center">
                <a href="https://www.linkedin.com/in/mattia-gemelli/" target="_blank" rel="noopener noreferrer">
                    <img src="@/assets/images/linkedin.png" alt="Linkedin Picture" class="max-w-8 object-contain"/>
                </a>
                <a href="https://github.com/Gwme13" target="_blank" rel="noopener noreferrer">
                    <img src="@/assets/images/github.png" alt="GitHub Picture" class="max-w-8 object-contain"/>
                </a>
            </div>
        </div>
    </section>
</template>