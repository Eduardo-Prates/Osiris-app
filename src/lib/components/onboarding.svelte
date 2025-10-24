<script lang="ts">
	export let title: string = '';
	export let description: string = '';
	export let image: string = '';
</script>

<div class="flex flex-col items-center text-center primary-foreground">
	<img src={image || "/placeholder.svg"} alt={title} class="mb-8 h-64 w-64 object-contain" />
	<h2 class="mb-4 text-2xl font-bold text-foreground">{title}</h2>
	<p class="text-pretty text-muted-foreground leading-relaxed">
		{description}
	</p>
</div>
