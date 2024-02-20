<template>
    <div class="layout">
		<slot />
    </div>
</template>

<style>
* {
	font-family: 'Inter', sans-serif;
	font-size: 1rem;
	line-height: 115%;
}
h1, p {
	pointer-events: none;
}
html {
	background-color: #f8f4f0;
}
.dark {
    background-color: #101010;
    color: #f8f4f0;
}

.title, .subtitle {
	pointer-events: none;
}

::selection {
	background-color: #0010ee;
	color: white;
}
::-moz-selection {
	background-color: #0010ee;
	color: white;
}

body::-webkit-scrollbar {
	width: 0.4rem;
	z-index: 0;
}
body::-webkit-scrollbar-track {
	background-color: #101010;
}
body::-webkit-scrollbar-track:hover {
	cursor: pointer !important;
}
body::-webkit-scrollbar-thumb {
	background-color: #ffffff;
}
</style>