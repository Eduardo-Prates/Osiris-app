<script lang="ts">
	let { title, description, image }: { title: string; description: string; image: string } = $props();
</script>

<div class="flex flex-col items-center text-center">
	<img src={image || "/placeholder.svg"} alt={title} class="mb-8 h-64 w-64 object-contain" />
	<h2 class="mb-4 text-2xl font-bold text-foreground">{title}</h2>
	<p class="text-pretty text-muted-foreground leading-relaxed">
		{description}
	</p>
</div>
