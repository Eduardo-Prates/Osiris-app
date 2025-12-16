<script lang="ts">
  import { goto } from "$app/navigation";

  let email = "";
  let emailSent = false;

  function handleRecovery() {
    console.log("[v0] Password recovery for:", email);
    emailSent = true;
    setTimeout(() => {
      goto("/login");
    }, 3000);
  }
</script>

<div class="flex min-h-screen flex-col bg-surface-50 px-6 py-12">
  <!-- Logo -->
  <div class="mb-8 flex items-center gap-2">
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

  <!-- Header -->
  <h1 class="mb-2 text-3xl font-bold text-surface-900">Recuperar senha</h1>
  <p class="mb-8 text-pretty text-surface-700 leading-relaxed">
    Informe seu email para receber um link de recuperação de senha
  </p>

  {#if !emailSent}
    <!-- Recovery form -->
    <form
      on:submit={(e) => {
        e.preventDefault();
        handleRecovery();
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

      <button
        type="submit"
        class="btn variant-filled-primary mt-4 w-full rounded-lg py-3 font-semibold"
      >
        Enviar link de recuperação
      </button>
    </form>

    <!-- Back to login -->
    <button
      type="button"
      on:click={() => goto("/login")}
      class="mt-4 w-full text-center text-sm text-primary-500 hover:underline"
    >
      ← Voltar para a tela de login
    </button>
  {:else}
    <!-- Success message -->
    <div
      class="card variant-soft-success flex flex-col items-center gap-4 rounded-lg p-6 text-center"
    >
      <div
        class="flex h-16 w-16 items-center justify-center rounded-full bg-success-500/20"
      >
        <svg
          class="h-8 w-8 text-success-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <div>
        <h2 class="mb-2 text-xl font-semibold text-surface-900">
          Email enviado!
        </h2>
        <p class="text-sm text-surface-700">
          Verifique sua caixa de entrada e siga as instruções para recuperar sua
          senha.
        </p>
      </div>
    </div>
  {/if}
</div>
