<script lang="ts">
	import { goto } from '$app/navigation';
	import OnboardingSlide from '$lib/components/onboarding.svelte';
	import carFallback from '$lib/images/car.png';
	import chatFallback from '$lib/images/chat.png';
	import profileFallback from '$lib/images/acount.png';

	let currentSlide = 0;

	const slides = [
		{
			title: 'Encontre produtos ou serviços',
			description: 'Pesquise e encontre tudo que você precisa para compras, aluguéis ou serviços, diretamente em seu celular.',
			image: carFallback
		},
		{
			title: 'Negocie e converse com o anunciante',
			description: 'Fale com os vendedores de cada produto, tire suas dúvidas e envie mensagens em tempo real para uma negociação.',
			image: chatFallback
		},
		{
			title: 'Gerencie seus anúncios e perfil',
			description: 'Cadastre produtos e serviços, acompanhe suas vendas, edite seu anúncio e receba notificações de novos negócios.',
			image: profileFallback
		}
	];

	function nextSlide() {
		if (currentSlide < slides.length - 1) {
			currentSlide++;
		} else {
			goto('/login');
		}
	}

	function skipOnboarding() {
		goto('/login');
	}
</script>

<div class="flex min-h-screen flex-col bg-background">
	<!-- Header with skip button -->
	<div class="flex items-center justify-between p-4">
		<span class="text-sm text-muted-foreground">{currentSlide + 1}/3</span>
		<button on:click={skipOnboarding} class="text-sm font-medium text-primary">
			Pular
		</button>
	</div>

	<!-- Slides container -->
	<div class="flex flex-1 flex-col items-center justify-center px-6">
		<OnboardingSlide
			title={slides[currentSlide].title}
			description={slides[currentSlide].description}
			image={slides[currentSlide].image}
		/>
	</div>

	<!-- Navigation dots and button -->
	<div class="flex flex-col items-center gap-6 p-6">
		<div class="flex gap-2">
			{#each slides as _, index}
				<button
					on:click={() => currentSlide = index}
					class="h-2 rounded-full transition-all {currentSlide === index ? 'w-8 bg-primary' : 'w-2 bg-muted'}"
					aria-label="Go to slide {index + 1}"
				></button>
			{/each}
		</div>

		<button
			on:click={nextSlide}
			class="w-full rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
		>
			{currentSlide === slides.length - 1 ? 'Começar' : 'Próximo'}
		</button>
	</div>
</div>
