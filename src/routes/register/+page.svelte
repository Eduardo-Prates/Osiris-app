<script lang="ts">
	import { goto } from '$app/navigation';

	// [CORREÇÃO] Removido o `$state()` de todas as variáveis
	let nome = '';
	let telefone = '';
	let email = '';
	let cpfCnpj = '';
	let senha = '';
	let confirmarSenha = '';
	let showPassword = false;
	let showConfirmPassword = false;
	let acceptTerms = false;

	function handleSignup() {
		console.log('[v0] Signup attempt:', { nome, email, telefone });
		goto('/login');
	}
</script>

<div class="flex min-h-screen flex-col bg-background px-6 py-12">
	<!-- Logo -->
	<div class="mb-8 flex items-center gap-2">
		<div class="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
			<svg class="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
				<circle cx="12" cy="12" r="3" />
				<circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="2" />
			</svg>
		</div>
	</div>

	<!-- Header -->
	<h1 class="mb-2 text-3xl font-bold text-foreground">Criar conta</h1>
	<p class="mb-8 text-muted-foreground">Preencha os dados para criar sua conta</p>

	<!-- Signup form -->
	<form
		on:submit={(e) => {
			e.preventDefault();
			handleSignup();
		}}
		class="flex flex-col gap-4"
	>
		<div class="relative">

			<input
				type="text"
				bind:value={nome}
				placeholder="Digite seu nome completo"
				class="w-full rounded-lg border border-input bg-background py-3 pl-11 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
				required
			/>
		</div>

		<div class="relative">

			<input
				type="tel"
				bind:value={telefone}
				placeholder="(00) 00000-0000"
				class="w-full rounded-lg border border-input bg-background py-3 pl-11 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
				required
			/>
		</div>

		<div class="relative">

			<input
				type="email"
				bind:value={email}
				placeholder="Digite seu email"
				class="w-full rounded-lg border border-input bg-background py-3 pl-11 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
				required
			/>
		</div>

		<div class="relative">

			<input
				type="text"
				bind:value={cpfCnpj}
				placeholder="Digite seu CPF ou CNPJ"
				class="w-full rounded-lg border border-input bg-background py-3 pl-11 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
				required
			/>
		</div>

		<!-- [CORREÇÃO] Aplicado o bloco #if para o input de SENHA -->
		<div class="relative">

			{#if showPassword}
				<input
					type="text"
					bind:value={senha}
					placeholder="Crie uma senha"
					class="w-full rounded-lg border border-input bg-background py-3 pl-11 pr-12 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
					required
				/>
			{:else}
				<input
					type="password"
					bind:value={senha}
					placeholder="Crie uma senha"
					class="w-full rounded-lg border border-input bg-background py-3 pl-11 pr-12 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
					required
				/>
			{/if}
			<button
				type="button"
				on:click={() => (showPassword = !showPassword)}
				class="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
			>
				{#if showPassword}

				{:else}

				{/if}
			</button>
		</div>

		<div class="relative">

			{#if showConfirmPassword}
				<input
					type="text"
					bind:value={confirmarSenha}
					placeholder="Confirme sua senha"
					class="w-full rounded-lg border border-input bg-background py-3 pl-11 pr-12 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
					required
				/>
			{:else}
				<input
					type="password"
					bind:value={confirmarSenha}
					placeholder="Confirme sua senha"
					class="w-full rounded-lg border border-input bg-background py-3 pl-11 pr-12 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
					required
				/>
			{/if}
			<button
				type="button"
				on:click={() => (showConfirmPassword = !showConfirmPassword)}
				class="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
			>
				{#if showConfirmPassword}

				{:else}

				{/if}
			</button>
		</div>

		<label class="flex items-start gap-2 text-sm">
			<input
				type="checkbox"
				bind:checked={acceptTerms}
				class="mt-0.5 h-4 w-4 rounded border-input text-primary focus:ring-2 focus:ring-ring"
				required
			/>
			<span class="text-muted-foreground">
				Eu li e concordo com os <a href="/termos" class="text-primary hover:underline"
					>Termos e Condições</a
				>
			</span>
		</label>

		<button
			type="submit"
			class="mt-4 w-full rounded-lg bg-primary py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
		>
			Criar conta
		</button>
	</form>

	<!-- Divider -->
	<div class="my-6 flex items-center gap-4">
		<div class="h-px flex-1 bg-border"></div>
		<span class="text-sm text-muted-foreground">Ou continue com</span>
		<div class="h-px flex-1 bg-border"></div>
	</div>

	<!-- Social signup -->
	<button
		class="flex w-full items-center justify-center gap-2 rounded-lg border border-input bg-background py-3 transition-colors hover:bg-muted"
	>
		<svg class="h-5 w-5" viewBox="0 0 24 24">
			<path
				fill="#4285F4"
				d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
			/>
			<path
				fill="#34A853"
				d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
			/>
			<path
				fill="#FBBC05"
				d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
			/>
			<path
				fill="#EA4335"
				d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
			/>
		</svg>

		<span class="font-medium text-foreground">Cadastrar com Google</span>
	</button>

	<!-- Login link -->
	<p class="mt-6 text-center text-sm text-muted-foreground">
		Já possui uma conta? <a href="/login" class="font-medium text-primary hover:underline"
			>Realize login</a
		>
	</p>
</div>
