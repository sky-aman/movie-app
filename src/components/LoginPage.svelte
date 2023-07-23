<!-- LoginPage.svelte -->
<script>
	import { getContext } from 'svelte';
  import authStore from '../auth.js';
	import { ALERT, LOADER, MSG_STATUS } from '../movieEnum.js';
	import FormComponent from './FormComponent.svelte';

  const { showAlert } = getContext(ALERT);
  const { showLoader, hideLoader } = getContext(LOADER);
  let email = '';
  let password = '';

  async function handleLogin() {
    showLoader();
    const response = await authStore.login(email, password);
    hideLoader();
    if(response?.msg) {
      showAlert(MSG_STATUS[response.status], response.msg);
    }
  }
</script>

<FormComponent title="Login">
  <form on:submit|preventDefault={handleLogin}>
    <div class="form-group">
      <label for="email">Email address</label>
      <input type="email" class="form-control" id="email" bind:value={email} required>
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input type="password" class="form-control" id="password" bind:value={password} required>
    </div>
    <button type="submit" class="btn btn-primary btn-block mt-2" >Login</button>
  </form>
</FormComponent>
