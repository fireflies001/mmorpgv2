var getData = {
            

    formData: {
            username: "",
            email: "",
            password: ""
        },
    status: false,
    loading: false,
    isError: false,
    modalHeaderText: "",
    modalBodyText: "",
    buttonLabel: 'Submit',
    submitData() {
        // Ensures all fields have data before submitting
        if (!this.formData.email.length || 
            !this.formData.password.length || 
            !this.formData.username.length) {
            alert("Please fill out all required field and try again!")
            return;
       }
        this.buttonLabel = 'Submitting...'
        this.loading = true;
        fetch('api/insertUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.formData)
            })
            .then((response) => {
                if(response.status === 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Successfully Registered',
                        text: 'Welcome heroes, please login to begin your journey!',
                        confirmButtonText: 'Go to login',
                    }).then((result) => {
                        if (result.value) {
                          window.location.href = `/`
                        }
                    });
                } else{
                    throw new Error ("Your registration failed");
                }
            })
            .catch((error) => {
                this.modalHeaderText = "Ooops Error!"
                this.modalBodyText = error.message;
                this.isError = true;
            })
            .finally(() => {
                this.loading = false;
                this.buttonLabel = 'Submit'
            })
    },
}

