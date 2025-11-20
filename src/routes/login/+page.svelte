<script lang="ts">
  import { goto } from "$app/navigation";

  let email = "";
  let password = "";
  let showPassword = false;

  function handleLogin() {
    console.log("[v0] Login attempt:", { email });
    goto("/home");
  }
</script>

<div class="flex min-h-screen flex-col bg-surface-50 px-6 py-12">
  <!-- Logo -->
  <div class="mb-12 flex items-center gap-2">
    <div
      class="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500/20"
    >
      <svg
        class="h-6 w-6 text-primary-500"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <circle cx="12" cy="12" r="3" />
        <circle
          cx="12"
          cy="12"
          r="8"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        />
      </svg>
    </div>
  </div>

  <!-- Welcome text -->
  <h1 class="mb-2 text-3xl font-bold text-surface-900">Bem-vindo de volta!</h1>
  <p class="mb-8 text-surface-700">Entre com sua conta para continuar</p>

  <!-- Login form -->
  <form
    on:submit={(e) => {
      e.preventDefault();
      handleLogin();
    }}
    class="flex flex-col gap-4"
  >
    <div class="relative">
      <input
        type="email"
        bind:value={email}
        placeholder="Digite seu email"
        class="input variant-form-material rounded-lg w-full py-3 pl-4 pr-4"
        required
      />
    </div>

    <div class="relative">
      {#if showPassword}
        <input
          type="text"
          bind:value={password}
          placeholder="Digite sua senha"
          class="input variant-form-material rounded-lg w-full py-3 pl-4 pr-12"
          required
        />
      {:else}
        <input
          type="password"
          bind:value={password}
          placeholder="Digite sua senha"
          class="input variant-form-material rounded-lg w-full py-3 pl-4 pr-12"
          required
        />
      {/if}
      <button
        type="button"
        on:click={() => (showPassword = !showPassword)}
        class="absolute right-3 top-1/2 -translate-y-1/2 text-surface-600 hover:text-surface-900"
      >
        {#if showPassword}
          <svg
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        {:else}
          <svg
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
            />
          </svg>
        {/if}
      </button>
    </div>

    <a
      href="/recovery"
      class="self-start text-sm text-primary-500 hover:underline"
    >
      Esqueceu a senha?
    </a>

    <button
      type="submit"
      class="btn variant-filled-primary mt-4 w-full rounded-lg py-3 font-semibold"
    >
      Entrar
    </button>
  </form>

  <!-- Divider -->
  <div class="my-6 flex items-center gap-4">
    <div class="h-px flex-1 bg-surface-300"></div>
    <span class="text-sm text-surface-600">Ou continue com</span>
    <div class="h-px flex-1 bg-surface-300"></div>
  </div>

  <!-- Social login -->
  <button
    class="btn variant-ghost-surface flex w-full items-center justify-center gap-2 rounded-lg py-3"
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

    <span class="font-medium">Entrar com Google</span>
  </button>

  <!-- Sign up link -->
  <p class="mt-6 text-center text-sm text-surface-700">
    Não tem uma conta? <a
      href="/register"
      class="font-medium text-primary-500 hover:underline">Cadastre-se</a
    >
  </p>
</div>
