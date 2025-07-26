// js/script.js

// --- Global Functions (Potentially used across multiple pages) ---

/**
 * Handles basic form submission (e.g., Login forms).
 * In a real application, this would send data to a backend API.
 * @param {Event} event - The form submission event.
 * @param {string} formType - 'adminLogin', 'userLogin', 'addAnnouncement', 'submitComplaint' etc.
 * @param {string} redirectUrl - URL to redirect to on successful 'login'.
 */
function handleFormSubmission(event, formType, redirectUrl = null) {
    event.preventDefault(); // Prevent default form submission (page reload)

    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    console.log(`[${formType}] Form Data:`, data);

    // --- Placeholder for Backend Interaction ---
    // In a real application, you would send this 'data' to your backend
    // using fetch() or an AJAX library.
    // Example:
    /*
    fetch('/api/' + formType, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        if (result.success) {
            console.log(`${formType} successful!`, result);
            if (redirectUrl) {
                window.location.href = redirectUrl; // Redirect on success
            }
            // Further actions like showing success message, clearing form etc.
        } else {
            console.error(`${formType} failed:`, result.message);
            alert(`Error: ${result.message}`); // Show error to user
        }
    })
    .catch(error => {
        console.error(`Network error during ${formType} submission:`, error);
        alert('An error occurred. Please try again.');
    });
    */

    // --- Temporary Frontend-Only Logic for Demonstration ---
    // Remove this block when integrating with a backend.
    if (formType === 'adminLogin' && data.username === 'admin' && data.password === 'adminpass') {
        alert('Admin Login Successful! (Frontend Demo)');
        if (redirectUrl) {
            window.location.href = redirectUrl;
        }
    } else if (formType === 'userLogin' && data.username === 'user' && data.password === 'userpass') {
        alert('User Login Successful! (Frontend Demo)');
        if (redirectUrl) {
            window.location.href = redirectUrl;
        }
    } else if (formType === 'addAnnouncement' || formType === 'submitComplaint') {
        alert(`${formType.replace(/([A-Z])/g, ' $1').trim()} submitted! (Frontend Demo)`);
        form.reset(); // Clear the form
    } else {
        if (formType.includes('Login')) {
            alert('Invalid credentials. (Frontend Demo)');
        }
    }
}

/**
 * Placeholder for loading dynamic data into tables/lists.
 * @param {string} dataType - 'complaints', 'announcements', 'users', 'userComplaints'.
 * @param {string} containerId - The ID of the HTML element to populate (e.g., 'complaints-list').
 */
function loadDynamicData(dataType, containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.warn(`Container with ID '${containerId}' not found for ${dataType}.`);
        return;
    }

    console.log(`Attempting to load ${dataType} into #${containerId}...`);

    // --- Placeholder for Backend API Call to Fetch Data ---
    // Example:
    /*
    fetch('/api/get_' + dataType)
        .then(response => response.json())
        .then(data => {
            container.innerHTML = ''; // Clear existing placeholder content
            if (data.success && data[dataType] && data[dataType].length > 0) {
                data[dataType].forEach(item => {
                    // This is where you'd construct the HTML for each item (e.g., table row)
                    // based on its properties and append it to the container.
                    // The example HTML in your pages already shows the structure.
                    let itemHtml = '';
                    if (dataType === 'complaints' || dataType === 'userComplaints') {
                        // Example for complaints:
                        itemHtml = `
                            <tr class="${item.isAnonymous ? 'anonymous-row' : ''}">
                                <td data-label="ID">${item.id}</td>
                                ${dataType === 'complaints' ? `<td data-label="Complainant">${item.complainant || 'Anonymous'}</td>` : ''}
                                <td data-label="Subject">${item.subject}</td>
                                <td data-label="Date Submitted">${item.date}</td>
                                <td data-label="Status" class="status-${item.status.toLowerCase().replace(' ', '-')}">${item.status}</td>
                                <td data-label="Actions">
                                    <button class="view-btn" onclick="viewDetails('${dataType}', '${item.id}')">View</button>
                                    ${dataType === 'complaints' && item.status !== 'Resolved' ? `<button class="resolve-btn" onclick="resolveItem('${dataType}', '${item.id}')">Resolve</button>` : ''}
                                    ${dataType === 'announcements' ? `<button class="delete-btn" onclick="deleteItem('${dataType}', '${item.id}')">Delete</button>` : ''}
                                </td>
                            </tr>
                        `;
                    } else if (dataType === 'announcements') {
                        // Example for announcements in admin panel:
                        itemHtml = `
                            <li>
                                <span class="announcement-list-item-title">${item.title}</span>
                                <span class="announcement-list-item-date">(${item.date})</span>
                                <button class="delete-btn" onclick="deleteItem('${dataType}', '${item.id}')">Delete</button>
                            </li>
                        `;
                    } else if (dataType === 'users') {
                         // Example for users:
                        itemHtml = `
                            <tr>
                                <td data-label="ID">${item.id}</td>
                                <td data-label="Username">${item.username}</td>
                                <td data-label="Apartment/Unit">${item.apartment}</td>
                                <td data-label="Status" class="status-${item.status.toLowerCase()}">${item.status}</td>
                                <td data-label="Actions">
                                    <button class="reset-password-btn" onclick="resetPassword('${item.id}')">Reset Pass</button>
                                    <button class="${item.status === 'Active' ? 'deactivate-btn' : 'activate-btn'}" onclick="toggleUserStatus('${item.id}', '${item.status}')">${item.status === 'Active' ? 'Deactivate' : 'Activate'}</button>
                                </td>
                            </tr>
                        `;
                    }
                    container.insertAdjacentHTML('beforeend', itemHtml);
                });
            } else {
                container.innerHTML = `<tr><td colspan="${dataType === 'complaints' ? 6 : (dataType === 'users' ? 5 : 1)}">No ${dataType} found.</td></tr>`;
            }
        })
        .catch(error => {
            console.error(`Error loading ${dataType}:`, error);
            container.innerHTML = `<tr><td colspan="${dataType === 'complaints' ? 6 : (dataType === 'users' ? 5 : 1)}" style="color:red;">Failed to load ${dataType}.</td></tr>`;
        });
    */

    // For demonstration, we'll just log that data would be loaded.
    console.log(`(Frontend Demo) Data for ${dataType} would be loaded here.`);
    // The static HTML content is currently visible. When backend is ready,
    // you'll clear the static content and populate dynamically.
}


/**
 * Placeholder for handling action buttons (view, resolve, delete, etc.).
 * @param {string} itemType - 'complaint', 'announcement', 'user'.
 * @param {string} itemId - The ID of the item.
 */
function handleItemAction(actionType, itemType, itemId) {
    console.log(`${actionType} ${itemType} with ID: ${itemId}`);
    // This is where you'd typically make another fetch() call to your backend
    // to perform the specific action (e.g., DELETE, PUT/PATCH to update status).
    alert(`${actionType} action triggered for ${itemType} ${itemId}! (Frontend Demo)`);
    // After a successful backend call, you might reload the data for the section.
    // e.g., if (actionType === 'Delete') loadDynamicData('announcements', 'current-announcements-list');
}

// --- Event Listeners and Page-Specific Initialization ---

document.addEventListener('DOMContentLoaded', () => {
    // Check the current page and attach listeners or load data accordingly

    const currentPage = window.location.pathname.split('/').pop();

    if (currentPage === 'admin_login.html') {
        const adminLoginForm = document.querySelector('.login-form');
        if (adminLoginForm) {
            adminLoginForm.addEventListener('submit', (event) =>
                handleFormSubmission(event, 'adminLogin', 'admin_dashboard.html')
            );
        }
    } else if (currentPage === 'user_login.html') {
        const userLoginForm = document.querySelector('.login-form');
        if (userLoginForm) {
            userLoginForm.addEventListener('submit', (event) =>
                handleFormSubmission(event, 'userLogin', 'user_dashboard.html')
            );
        }
    } else if (currentPage === 'admin_dashboard.html') {
        loadDynamicData('complaints', 'complaints-list');
        loadDynamicData('announcements', 'current-announcements-list');
        loadDynamicData('users', 'user-list');

        const addAnnouncementForm = document.querySelector('.announcement-form');
        if (addAnnouncementForm) {
            addAnnouncementForm.addEventListener('submit', (event) =>
                handleFormSubmission(event, 'addAnnouncement')
            );
        }

        // Attach event listeners to action buttons using event delegation
        // This is important because dynamically loaded buttons won't have listeners by default
        document.getElementById('complaints-list').addEventListener('click', (event) => {
            if (event.target.classList.contains('view-btn')) {
                const itemId = event.target.closest('tr').querySelector('[data-label="ID"]').textContent;
                handleItemAction('View', 'complaint', itemId);
            } else if (event.target.classList.contains('resolve-btn')) {
                const itemId = event.target.closest('tr').querySelector('[data-label="ID"]').textContent;
                handleItemAction('Resolve', 'complaint', itemId);
            }
        });

        document.getElementById('current-announcements-list').addEventListener('click', (event) => {
            if (event.target.classList.contains('delete-btn')) {
                const itemId = event.target.closest('li').querySelector('.announcement-list-item-title').textContent; // Using title as ID for demo
                handleItemAction('Delete', 'announcement', itemId);
            }
        });

        document.getElementById('user-list').addEventListener('click', (event) => {
            if (event.target.classList.contains('reset-password-btn')) {
                const itemId = event.target.closest('tr').querySelector('[data-label="ID"]').textContent;
                handleItemAction('Reset Password', 'user', itemId);
            } else if (event.target.classList.contains('deactivate-btn') || event.target.classList.contains('activate-btn')) {
                const itemId = event.target.closest('tr').querySelector('[data-label="ID"]').textContent;
                const currentStatus = event.target.classList.contains('deactivate-btn') ? 'Active' : 'Inactive';
                handleItemAction('Toggle Status', 'user', itemId, currentStatus);
            }
        });


    } else if (currentPage === 'user_dashboard.html') {
        loadDynamicData('userComplaints', 'user-complaints-list');

        const submitComplaintForm = document.querySelector('.complaint-submission-form');
        if (submitComplaintForm) {
            submitComplaintForm.addEventListener('submit', (event) =>
                handleFormSubmission(event, 'submitComplaint')
            );
        }

        document.getElementById('user-complaints-list').addEventListener('click', (event) => {
            if (event.target.classList.contains('view-btn')) {
                const itemId = event.target.closest('tr').querySelector('[data-label="ID"]').textContent;
                handleItemAction('View', 'userComplaint', itemId);
            }
        });

    } else if (currentPage === 'announcement.html') {
        loadDynamicData('announcements', 'announcements-list');
        // Note: Public announcement page will just display, no actions like delete.
    }
});

// Helper for action buttons (can be simplified later when backend is integrated)
function viewDetails(type, id) {
    handleItemAction('View', type, id);
}
function resolveItem(type, id) {
    handleItemAction('Resolve', type, id);
}
function deleteItem(type, id) {
    handleItemAction('Delete', type, id);
}
function resetPassword(id) {
    handleItemAction('Reset Password', 'user', id);
}
function toggleUserStatus(id, currentStatus) {
    handleItemAction('Toggle Status', 'user', id, currentStatus);
}