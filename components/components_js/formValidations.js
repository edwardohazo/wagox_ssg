document.addEventListener("DOMContentLoaded", function () {

    if (!window.location.href.includes("/contact")) {
        // Run script for this specific URL
        return;
    }

    let d = document;
    const $form = document.getElementById("form"),
    $inputs = d.querySelectorAll('.contact-form [required]');

    $inputs.forEach((input) => {
        const $span = d.createElement('SPAN');
        $span.id = input.name;
        $span.textContent = input.title;
        $span.classList.add('contact-form-error', 'none');
        input.insertAdjacentElement('afterend', $span);
    });

    d.addEventListener('keyup', (e) => {

        if (e.target.matches('.contact-form [required]')) {
            let $input = e.target;
            pattern = $input.pattern || $input.dataset.pattern;

            if (pattern && $input.value !== '') {
                let regex = new RegExp(pattern);
                if (!regex.exec($input.value)) {
                    d.querySelector('span#' + $input.name).classList.add("is-active"); 
                    d.getElementById($input.name).classList.add("input-invalid")
                    return;
                } else {
                    d.querySelector('span#' + $input.name).classList.remove("is-active");
                    d.getElementById($input.name).classList.remove("input-invalid")
                    return;
                }
            }
            
            if (!pattern) {
                return $input.value === ''
                ? d.querySelector('span#' + $input.name).classList.add("is-active") && d.getElementById($input.name).classList.add("input-invalid")
                : d.querySelector('span#' + $input.name).classList.remove("is-active") &&  d.getElementById($input.name).classList.remove("input-invalid")
            }
        }
    });

    $form.addEventListener("submit", function (event) {
        event.preventDefault();
        const $loader = d.querySelector('.contact-form-loader'),
        $response = d.querySelector('.contact-form-response');

        $loader.classList.remove('none');

        const formData = new FormData(event.target);
        const jsonObject = Object.fromEntries(formData.entries());

        fetch('../assets/src/scripts/send_email.php', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(jsonObject)
        })
        .then(res => res.ok ? res.json() : Promise.reject(res))
        .then(json => {
            console.log("DATA: ", json);
            $loader.classList.add('none');
            $response.classList.remove('none');
            $response.innerHTML = `<p class="text-white">${json.message}</p>`;
            $form.reset();
        })
        .catch(error => {
            console.log("ERROR:", error);
            let message = error.statusText || 'An error has ocurred!';
            $response.innerHTML = `<p class="text-white">Error ${error.status}: ${message}</p>`;
        })
        .finally(() => {
            setTimeout(() => {
                $response.classList.add('none');
                $response.innerHTML = "";
            }, 8000);
        })
    });
});

















