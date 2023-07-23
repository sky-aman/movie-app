<!-- SignupPage.svelte -->
<script>
  import { getContext } from 'svelte';
  import authStore from '../auth.js';
	import FormComponent from './FormComponent.svelte';
	import { ALERT, LOADER, MSG_STATUS } from '../movieEnum.js';
    
  const { showAlert } = getContext(ALERT);
  const { showLoader, hideLoader } = getContext(LOADER);

  let email = '';
  let password = '';
  let name = '';

  async function handleSignup() {
    // Simulate an API call for user registration
    showLoader();
    const response = await authStore.signup({name, email, password});
    hideLoader();
    if(response?.msg){
        showAlert(MSG_STATUS[response.status], response.msg)
    }
  }
</script>

<FormComponent title="Sign Up">
  <form on:submit|preventDefault={handleSignup}>
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" class="form-control" id="name" bind:value={name} required>
    </div>
    <div class="form-group">
      <label for="email">Email address</label>
      <input type="email" class="form-control" id="email" bind:value={email} required>
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input type="password" class="form-control" id="password" bind:value={password} minlength="4" required>
    </div>
    <button type="submit" class="btn btn-primary btn-block mt-2" >Sign Up</button>
  </form>
</FormComponent>
