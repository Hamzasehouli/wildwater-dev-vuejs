<template>
  <main>
    <pages-cmp :obj="obj"></pages-cmp>
    <content-cmp img="images/lemo.jpg"
      ><template #img></template
      ><template #default>
        <p class="globalPara">
          We work for the well-being of our customers, but we are also attentive
          to the well-being of our employees. We have long understood that
          focusing on people and providing our employees with a rewarding work
          environment is a powerful lever for performance. This is why we make
          sure to comply with the most demanding OSH (Health and Safety at Work)
          standards.
        </p></template
      >
    </content-cmp>
    <content-cmp :state="true" img="images/lemo2.jpg"
      ><template #img></template
      ><template #default>
        <p class="globalPara">
          Activities such as the professional interview or the annual evaluation
          allow employees to evolv their performance, development and career
          plan. We thus ensure that we offer what is necessary to achieve goals,
          integration and training adapted to the needs of each individual. The
          respect we have for our employees enabled us to receive the MER label
          from the AFFD in 2015, which rewards our commitment to social
          responsibility.
        </p></template
      >
    </content-cmp>
    <section class="section__form">
      <div v-if="sending" class="loader"></div>
      <div v-if="sent" class="dialog">
        <p>
          Your request has been successfully sent (This is website is static and
          no backend server is attached to, and no email will be sent to the
          entered email adresse)
        </p>
      </div>
      <form v-if="!sending && !sent" @submit.prevent="submitForm" class="form">
        <div :class="{ invalid: !firstNameValid }" class="form__entry">
          <input
            v-model.trim="firstName"
            id="firstName"
            type="text"
            class="form__input"
          />
          <label for="firstName" class="form__label">First name*</label>
        </div>
        <div :class="{ invalid: !lastNameValid }" class="form__entry">
          <input
            v-model.trim="lastName"
            id="lastName"
            type="text"
            class="form__input"
          />
          <label for="lastName" class="form__label">Last name*</label>
        </div>

        <div :class="{ invalid: !emailValid }" class="form__entry">
          <input
            v-model.trim="email"
            id="email"
            type="email"
            class="form__input"
          />
          <label for="email" class="form__label">Email*</label>
        </div>
        <div :class="{ invalid: !telValid }" class="form__entry">
          <input v-model.trim="tel" id="phone" type="tel" class="form__input" />
          <label for="phone" class="form__label">Tel*</label>
        </div>
        <button type="button">Upload your resume</button>
        <p :class="{ invalid: !legalValid }">
          <input v-model="legal" type="checkbox" />I have read and accept the
          legal notices, in particular the notice relating to the protection of
          personal data.
        </p>
        <p :class="{ invalid: !legalValid }">
          In accordance with Law 09-08, you have the right to access, rectify
          and oppose the processing of your personal data. This treatment was
          declared to the CNDP.
        </p>
        <button type="submit">Send</button>
      </form>
    </section>
  </main>
</template>
<script>
import { reactive, ref, onMounted } from "vue";
export default {
  setup() {
    const firstNameValid = ref(true);
    const lastNameValid = ref(true);
    const emailValid = ref(true);
    const telValid = ref(true);
    const legalValid = ref(true);
    let sending = ref(false);
    let sent = ref(false);
    let lastName = ref("");
    let firstName = ref("");
    let email = ref("");
    let tel = ref("");
    let legal = ref("");
    const obj = reactive({
      title: `Career`,
      para: " Joining Wildwater means joining a company that is both deeply rooted in tradition and resolutely modern. For nearly 90 years,we've been the benchmark for healthy hydration.",
      path: "url('images/career2.jpg')",
    });
    const submitForm = function () {
      console.log(firstName.value);
      if (firstName.value === "") {
        firstNameValid.value = false;
      } else {
        firstNameValid.value = true;
      }
      if (lastName.value === "") {
        lastNameValid.value = false;
      } else {
        lastNameValid.value = true;
      }
      if (
        email.value === "" ||
        !email.value.includes("@") ||
        !email.value.split("@")[1]?.includes(".")
      ) {
        emailValid.value = false;
      } else {
        emailValid.value = true;
      }
      if (tel.value === "") {
        telValid.value = false;
      } else {
        telValid.value = true;
      }
      if (!legal.value) {
        legalValid.value = false;
      } else {
        legalValid.value = true;
      }

      if (
        !firstNameValid.value ||
        !lastNameValid.value ||
        !emailValid.value ||
        !telValid.value ||
        !legalValid.value
      )
        return;

      sending.value = true;

      setTimeout(() => {
        sending.value = false;
        sent.value = true;
        lastName.value = "";
        legal.value = false;
        tel.value = "";
        firstName.value = "";
        email.value = "";
      }, 3000);
    };

    onMounted(function () {
      document.title = "Career";
    });

    return {
      obj,
      submitForm,
      lastName,
      firstName,
      tel,
      email,
      legal,
      sending,
      sent,
      telValid,
      emailValid,
      firstNameValid,
      lastNameValid,
      legalValid,
    };
  },
};
</script>

<style lang="scss" scoped>
.section__form {
  margin: 7rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form {
  @media only screen and(max-width:49rem) {
    width: 70%;
  }
  width: 35%;
  button {
    width: 100%;
    background-color: var(--color-tertiary);
    color: white;
    padding: 1rem;
    outline: none;
    border: none;
    cursor: pointer;
  }
  & > * {
    margin-bottom: 2rem;
  }
  &__entry {
    position: relative;
    width: 100;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    & > * {
      width: 100%;
      margin-bottom: 0.7rem;
    }
  }
  &__input {
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 0;
    border-bottom: 1px solid var(--color-tertiary);

    transition: all 0.3s;
  }
  &__label {
    position: absolute;
    color: var(--color-tertiary);
    transition: all 0.3s;
    backface-visibility: hidden;
    transform: translateY(0);
    cursor: text;
  }
  &__input:valid ~ &__label {
    font-size: 1.1rem;
    transform: translateY(-2rem);
  }
}
.loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.dialog {
  width: 30%;
  border-radius: 6px;
  color: white;
  background-color: var(--color-primary);
  padding: 2rem;
}

.invalid {
  color: red;
  label {
    color: red !important;
  }

  input {
    border-bottom: 2px solid red !important;
  }
}
</style>
