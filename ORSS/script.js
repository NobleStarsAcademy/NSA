// Initialize Lucide Icons
lucide.createIcons();

// pupil Database - Configure your Google Drive links here
// Format: 'SURNAME-CLASS': 'https://drive.google.com/your-link-here'
const pupilDatabase = {
    // Example entries - Replace with your actual pupil data
    'FOLARIN-Primary4-ThirdTerm-S2526': 'https://drive.google.com/file/d/1cDx1ISrxSA2gMEK1e0xiLEkSDUF0y0mr/view?usp=drivesdk',
    'EGBUNA-Primary4-SecondTerm-S2526': '',
    'OYEBODE-Primary2-ThirdTerm-S2526': 'https://drive.google.com/file/d/1hZCZqWF_XkgHn8JrTSSKh8wk74DMXlmW/view?usp=drivesdk',
    'ADEWUMI-Primary2-ThirdTerm-S2526': 'https://drive.google.com/file/d/1kEs6KC7YLs5GrXRSXIfjUL3Me086Gbzl/view?usp=drivesdk',
    'ABIDOYE-Primary2-ThirdTerm-S2526': 'https://drive.google.com/file/d/1xxwZnlfiSm06f2YKvL8hDEcQkuRTVrqL/view?usp=drivesdk',
    'RAJI-Primary2-ThirdTerm-S2526': 'https://drive.google.com/file/d/1MM7BqmwCasH4qpGEvTAMgv_bv2NrWxXl/view?usp=drivesdk',
    'OKUNOLA-Primary2-ThirdTerm-S2526': 'https://drive.google.com/file/d/1j4L0CE4HOTFNqQh8rzWKkyu_gwTteltl/view?usp=drivesdk',
    'OYEBODE-Primary4-ThirdTerm-S2526': 'https://drive.google.com/file/d/1KIrsd-47BsM1w1W31mspZUVPiPjR1cUD/view?usp=drivesdk',
    'ADEOSUN-Primary2-ThirdTerm-S2526': 'https://drive.google.com/file/d/1uhZE2DKvCCiHLfIqhV3cSHvCV6VTfYb1/view?usp=drivesdk',
    'ADEKUNLE-Primary4-ThirdTerm-S2526': 'https://drive.google.com/file/d/1F-caqcOO70seatCEyDJ20Mna7uaV9BQb/view?usp=drivesdk',
    'ROLLAND-Primary4-ThirdTerm-S2526': 'https://drive.google.com/file/d/1ZoXNvmynKiFPu7e3sfX-cjc_ScTEP6R5/view?usp=drivesdk',
    'OBI-Primary3-ThirdTerm-S2526': 'https://drive.google.com/file/d/1peS9NXhak14bb1xkg7VNd5cHR45abPWT/view?usp=drivesdk',
    'ADEKOYA-Primary4-ThirdTerm-S2526': 'https://drive.google.com/file/d/1SiGscX6jzhllGzoAT8z7Qr97EM_JMX-Z/view?usp=drivesdk',
    'AKINSOLA-Primary1-ThirdTerm-S2526': 'https://drive.google.com/file/d/1tGfn-0ETiKkcr0xKXJOZHXfoGQVTSvxO/view?usp=drivesdk',
    'EGBUNA-Primary1-ThirdTerm-S2526': 'https://drive.google.com/file/d/1zsj14CKF5ANtcYsN3LSochLTEY3c9Vz5/view?usp=drivesdk',
    'ONI-Primary1-ThirdTerm-S2526': 'https://drive.google.com/file/d/1WUljWoF-MKRRcrNeH7YeBcv2yN207uq4/view?usp=drivesdk',
    'PRINCE-Primary1-ThirdTerm-S2526': 'https://drive.google.com/file/d/1K15PLAId6firk49jM5k_U_GpIPDheDfW/view?usp=drivesdk',
    'SALAWU-Primary1-ThirdTerm-S2526': 'https://drive.google.com/file/d/1p-cN-FGvntMk7nYrtLnr9riiLtCgWijG/view?usp=drivesdk',
    'ADEOSUN-Kindergaten2-ThirdTerm-S2526': 'https://drive.google.com/file/d/1LpmVHWWzBr7jQb5lPZ0tHreTUQ8AKZz8/view?usp=drivesdk',
    'BABARINDE-Kindergaten2-ThirdTerm-S2526': 'https://drive.google.com/file/d/1VGXwC1RxDxOfQTb6riw2FcCx2UIewq3N/view?usp=drivesdk',
    'KAYODE-Kindergaten2-ThirdTerm-S2526': 'https://drive.google.com/file/d/1Qn4g69PqIuPni3Z7XJedY37Z_xe5BoWY/view?usp=drivesdk',
    'MAKINWA-Kindergaten2-ThirdTerm-S2526': 'https://drive.google.com/file/d/1f2RN184OWi6BUnEjf4p0uQNnXmsSQj4q/view?usp=drivesdk',
    'OBADIAH-Kindergaten2-ThirdTerm-S2526': 'https://drive.google.com/file/d/1DXcLfIVpVAjfZ7CgzIK6f_QO3FiPxevi/view?usp=drivesdk',
    'OBI-Kindergaten2-ThirdTerm-S2526': 'https://drive.google.com/file/d/12-COeaO9N48WghocwdD29_ShUbT9ikua/view?usp=drivesdk',
    'OKECHUKWU-Kindergaten2-ThirdTerm-S2526': 'https://drive.google.com/file/d/1FP5wC9rANhbi5gI5dDCRU_648aTBqqZt/view?usp=drivesdk',
    'OLABODE-Kindergaten2-ThirdTerm-S2526': 'https://drive.google.com/file/d/1188Whi5hW4lHKWLdPCav71r1RogF7r4E/view?usp=drivesdk',
    'OYEBODE-Kindergaten2-ThirdTerm-S2526': 'https://drive.google.com/file/d/1-dkfTSObSQTN3qv5EHGhQwr8cq9eK5yi/view?usp=drivesdk',
    'OYEWOLE-Kindergaten2-ThirdTerm-S2526': 'https://drive.google.com/file/d/1PTLd2geZRI-nnGbSeumsGNxJ35q8TO0j/view?usp=drivesdk'
};

// DOM Elements
const form = document.getElementById('loginForm');
const surnameInput = document.getElementById('surname');
const classSelect = document.getElementById('classSelect');
const accessBtn = document.getElementById('accessBtn');
const btnText = document.getElementById('btnText');
const btnIcon = document.getElementById('btnIcon');
const btnLoader = document.getElementById('btnLoader');
const surnameError = document.getElementById('surnameError');
const classError = document.getElementById('classError');
const messageContainer = document.getElementById('messageContainer');
const messageText = document.getElementById('messageText');
const termSelect = document.getElementById('termSelect');
const termError = document.getElementById('termError');
const sessionSelect = document.getElementById('sessionSelect');
const sessionError = document.getElementById('sessionError');

// Utility Functions
function showError(element, show) {
    if (show) {
        element.classList.remove('hidden');
        element.classList.add('flex');
    } else {
        element.classList.add('hidden');
        element.classList.remove('flex');
    }
}

function setLoading(isLoading) {
    if (isLoading) {
        btnText.classList.add('opacity-0');
        btnIcon.classList.add('opacity-0');
        btnLoader.classList.remove('hidden');
        accessBtn.disabled = true;
        accessBtn.classList.add('cursor-not-allowed');
    } else {
        btnText.classList.remove('opacity-0');
        btnIcon.classList.remove('opacity-0');
        btnLoader.classList.add('hidden');
        accessBtn.disabled = false;
        accessBtn.classList.remove('cursor-not-allowed');
    }
}

function showMessage(message, type = 'error') {
    messageContainer.classList.remove('hidden');
    messageText.textContent = message;
    
    if (type === 'success') {
        messageContainer.className = 'mt-4 p-4 rounded-xl bg-green-500/20 border border-green-400/30 text-center animate-fade-in';
        messageText.className = 'text-green-100 text-sm font-medium';
    } else {
        messageContainer.className = 'mt-4 p-4 rounded-xl bg-red-500/20 border border-red-400/30 text-center animate-fade-in';
        messageText.className = 'text-red-100 text-sm font-medium';
    }
    
    // Auto hide after 5 seconds
    setTimeout(() => {
        messageContainer.classList.add('hidden');
    }, 5000);
}

function normalizeInput(surname) {
    return surname.trim().toUpperCase().replace(/\s+/g, '');
}

function constructKey(surname, className, term, session) {
    return `${normalizeInput(surname)}-${className}-${term.replace(/\s+/g, '')}-${session}`;
}

// Form Validation
function validateForm() {
    let isValid = true;
    
    // Validate Surname
    if (!surnameInput.value.trim()) {
        showError(surnameError, true);
        surnameInput.classList.add('border-red-400', 'focus:border-red-400', 'focus:ring-red-400/20');
        surnameInput.classList.remove('border-transparent', 'focus:border-fuchsia-500', 'focus:ring-fuchsia-500/20');
        isValid = false;
    } else {
        showError(surnameError, false);
        surnameInput.classList.remove('border-red-400', 'focus:border-red-400', 'focus:ring-red-400/20');
        surnameInput.classList.add('border-transparent', 'focus:border-fuchsia-500', 'focus:ring-fuchsia-500/20');
    }
    
    // Validate Class
    if (!classSelect.value) {
        showError(classError, true);
        classSelect.classList.add('border-red-400', 'focus:border-red-400', 'focus:ring-red-400/20');
        classSelect.classList.remove('border-transparent', 'focus:border-fuchsia-500', 'focus:ring-fuchsia-500/20');
        isValid = false;
    } else {
        showError(classError, false);
        classSelect.classList.remove('border-red-400', 'focus:border-red-400', 'focus:ring-red-400/20');
        classSelect.classList.add('border-transparent', 'focus:border-fuchsia-500', 'focus:ring-fuchsia-500/20');
    }

    // Validate Term
    if (!termSelect.value) {
        showError(termError, true);
        termSelect.classList.add('border-red-400', 'focus:border-red-400', 'focus:ring-red-400/20');
        termSelect.classList.remove('border-transparent', 'focus:border-fuchsia-500', 'focus:ring-fuchsia-500/20');
        isValid = false;
    } else {
        showError(termError, false);
        termSelect.classList.remove('border-red-400', 'focus:border-red-400', 'focus:ring-red-400/20');
        termSelect.classList.add('border-transparent', 'focus:border-fuchsia-500', 'focus:ring-fuchsia-500/20');
    }

    // Validate Session
    if (!sessionSelect.value) {
        showError(sessionError, true);
        sessionSelect.classList.add('border-red-400', 'focus:border-red-400', 'focus:ring-red-400/20');
        sessionSelect.classList.remove('border-transparent', 'focus:border-fuchsia-500', 'focus:ring-fuchsia-500/20');
        isValid = false;
    } else {
        showError(sessionError, false);
        sessionSelect.classList.remove('border-red-400', 'focus:border-red-400', 'focus:ring-red-400/20');
        sessionSelect.classList.add('border-transparent', 'focus:border-fuchsia-500', 'focus:ring-fuchsia-500/20');
    }
    
    return isValid;
}

// Handle Form Submission
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Clear previous messages
    messageContainer.classList.add('hidden');
    
    // Validate
    if (!validateForm()) {
        // Shake animation for error feedback
        form.classList.add('animate-pulse');
        setTimeout(() => form.classList.remove('animate-pulse'), 500);
        return;
    }
    
    // Get values
    const surname = surnameInput.value;
    const pupilClass = classSelect.value;
    const term = termSelect.value;
    const session = sessionSelect.value;
    const key = constructKey(surname, pupilClass, term, session);
    
    // Show loading state
    setLoading(true);
    
    // Simulate network delay for security perception
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Check database
    if (pupilDatabase[key]) {
        // Success - Show success message briefly then redirect
        showMessage('Access granted! Redirecting to your report...', 'success');
        
        setTimeout(() => {
            // Open Google Drive link in new tab
            window.open(pupilDatabase[key], '_blank');
            setLoading(false);
            
            // Reset form after successful access
            setTimeout(() => {
                form.reset();
                messageContainer.classList.add('hidden');
            }, 2000);
        }, 1000);
        
    } else {
        // Not found - For demo, allow access to generic link or show error
        // In production, you might want to strictly show error
        
        // Option 1: Strict mode (uncomment for production)
        showMessage('Pupil record not found. Please check your surname and class selection OR confirm that you do not owe the school any dues or fees.', 'error');
        setLoading(false);
        
        // Option 2: Demo mode - Allow access to placeholder with warning
        //showMessage('Demo Mode: Opening sample report...', 'success');
        //setTimeout(() => {
        //    window.open('https://drive.google.com/drive/my-drive', '_blank');
        //    setLoading(false);
        //}, 1000);
    }
});

// Real-time Validation
surnameInput.addEventListener('input', () => {
    if (surnameInput.value.trim()) {
        showError(surnameError, false);
        surnameInput.classList.remove('border-red-400', 'focus:border-red-400', 'focus:ring-red-400/20');
        surnameInput.classList.add('border-transparent', 'focus:border-fuchsia-500', 'focus:ring-fuchsia-500/20');
    }
});

classSelect.addEventListener('change', () => {
    if (classSelect.value) {
        showError(classError, false);
        classSelect.classList.remove('border-red-400', 'focus:border-red-400', 'focus:ring-red-400/20');
        classSelect.classList.add('border-transparent', 'focus:border-fuchsia-500', 'focus:ring-fuchsia-500/20');
    }
});

termSelect.addEventListener('change', () => {
    if (termSelect.value) {
        showError(termError, false);
        termSelect.classList.remove('border-red-400', 'focus:border-red-400', 'focus:ring-red-400/20');
        termSelect.classList.add('border-transparent', 'focus:border-fuchsia-500', 'focus:ring-fuchsia-500/20');
    }
});

sessionSelect.addEventListener('change', () => {
    if (sessionSelect.value) {
        showError(sessionError, false);
        sessionSelect.classList.remove('border-red-400', 'focus:border-red-400', 'focus:ring-red-400/20');
        sessionSelect.classList.add('border-transparent', 'focus:border-fuchsia-500', 'focus:ring-fuchsia-500/20');
    }
});

// Keyboard Accessibility - Allow Enter key to submit
form.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && e.target.tagName !== 'BUTTON') {
        accessBtn.click();
    }
});

// Prevent form resubmission on page refresh
if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}

// Console greeting for developers
console.log('%c🏫 Noble Stars Academy Portal', 'color: #4169E1; font-size: 20px; font-weight: bold;');
console.log('%c📝 Online Report Sheet System', 'color: #FF1493; font-size: 14px;');
console.log('%c🔒 Secure Pupil Report Sheet System', 'color: #666; font-size: 12px;');
