<script>
  import { goto } from "$app/navigation";
</script>

<div
  class="container h-full mx-auto flex justify-center items-center bg-surface-50"
>
  <div class="card variant-glass-surface p-8 space-y-6 max-w-md">
    <div class="flex justify-center mb-4">
      <div
        class="flex h-16 w-16 items-center justify-center rounded-full bg-primary-500/20"
      >
        <svg
          class="h-10 w-10 text-primary-500"
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

    <div class="text-center space-y-2">
      <h1 class="h1 text-primary-500">Bem-vindo ao Osiris</h1>
      <p class="text-surface-700">Escolha uma opção para começar:</p>
    </div>

    <div class="space-y-3">
      <button
        on:click={() => goto("/onboarding")}
        class="btn variant-filled-primary w-full rounded-lg py-3 font-semibold"
      >
        Entrar
      </button>
      <button
        on:click={() => goto("/register")}
        class="btn variant-ghost-primary w-full rounded-lg py-3 font-semibold"
      >
        Criar conta
      </button>
    </div>

    <div class="text-center text-sm text-surface-600">
      <a href="/recovery" class="text-primary-500 hover:underline">
        Esqueceu sua senha?
      </a>
    </div>
  </div>
</div>
