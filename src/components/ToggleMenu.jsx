import { useState } from "react";

export default function Toggle() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div>
        <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
		  <div class="flex lg:flex-1">
			<a href={`${import.meta.env.BASE_URL}`} class="-m-1.5 p-1.5">
			  <span class="sr-only">Your Company</span>
			  <img class="absolute top-0 left-0 h-32 w-32" src={`${import.meta.env.BASE_URL}/images/logo.png`} alt="Logo tex Store" />
			</a>
		  </div>
		  <div class="flex lg:hidden">
			<button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white" onClick={toggleMenu}>
			  <span class="sr-only">Open main menu</span>
			  <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
				<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
			  </svg>
			</button>
		  </div>
		  <div class="hidden lg:flex lg:gap-x-12">
			<div class="relative">
			  <button type="button" class="flex items-center gap-x-1 text-sm/6 font-semibold text-white" aria-expanded="false">
				Guitarras
			  </button>
			</div>
	  
			<a href="#" class="text-sm/6 font-semibold text-white">Cuerdas</a>
			<a href="#" class="text-sm/6 font-semibold text-white">Fundas</a>
			<a href="#" class="text-sm/6 font-semibold text-white">Accesorios</a>
		  </div>
		  <div class="hidden lg:flex lg:flex-1 lg:justify-end">
			<a href="#" class="text-sm/6 font-semibold text-white">Contacto <span aria-hidden="true">&rarr;</span></a>
		  </div>
		</nav>
		<div class={`lg:hidden ${isOpen ? '' : 'hidden'}`} role="dialog" aria-modal="true">
		  <div class="fixed inset-0 z-10"></div>
		  <div class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
			<div class="flex items-center justify-between">
			  <a href="#" class="-m-1.5 p-1.5">
				<span class="sr-only">Your Company</span>
			  </a>
			  <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700"  onClick={toggleMenu}>
				<span class="sr-only">Close menu</span>
				<svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
				  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
				</svg>
			  </button>
			</div>
			<div class="mt-6 flow-root">
			  <div class="-my-6 divide-y divide-gray-500/10">
				<div class="space-y-2 py-6">
				  <div class="-mx-3">
					<a href="#" class="-m-1.5 p-1.5">
					  Productos
					</a>
				  </div>
				</div>
				<div class="py-6">
					<a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Guitarras</a>
				  </div>
				<div class="py-6">
				  <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Cuerdas</a>
				</div>
				<div class="py-6">
					<a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Fundas</a>
				  </div>
				  <div class="py-6">
					<a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Accesorios</a>
				  </div>
			  </div>
			</div>
		  </div>
          </div>
          </div>
  );
}