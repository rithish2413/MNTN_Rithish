 const loginModal = document.getElementById('loginModal');
        const accountBtn = document.getElementById('account-btn');
        const closeLogin = document.getElementById('closeLogin');
        

        accountBtn.addEventListener('click', function(e) {
            e.preventDefault();
            loginModal.classList.add('active');
            document.body.style.overflow = 'hidden'; 
        });
        
    
        closeLogin.addEventListener('click', function() {
            loginModal.classList.remove('active');
            document.body.style.overflow = ''; 
        });
        
        loginModal.addEventListener('click', function(e) {
            if (e.target === loginModal) {
                loginModal.classList.remove('active');
                document.body.style.overflow = ''; 
            }
        });
        
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && loginModal.classList.contains('active')) {
                loginModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
        
        


      