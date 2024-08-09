document.addEventListener("DOMContentLoaded", function() {
	const menuItems = document.querySelectorAll('.side-menu li a');
	const sections = document.querySelectorAll('.content-section');
	const menuToggle = document.getElementById('menu-toggle');
	const sidebar = document.getElementById('sidebar');
	const closeSidebar = document.getElementById('close-sidebar');
	const profilePic = document.getElementById('profile-pic');
	const modal = document.getElementById('modal');
	const modalImage = document.getElementById('modal-image');
	const closeModal = document.getElementById('close');
	const darkModeToggle = document.getElementById('dark-mode-toggle');

	// Menu tugmalarini bosganda sahifalarni almashtirish
	menuItems.forEach(item => {
			item.addEventListener('click', function(e) {
					e.preventDefault(); // Standart amalni bekor qilish (sahifani qayta yuklashdan saqlanish)

					// Barcha bo'limlarni yashirish
					sections.forEach(section => {
							section.classList.remove('active');
					});

					// Maqsadli bo'limni ko'rsatish
					const target = this.getAttribute('data-target');
					document.getElementById(target).classList.add('active');

					// Yon menyuni yopish
					sidebar.classList.remove('show');
			});
	});

	// Yon menyuni ochish va yopish
	menuToggle.addEventListener('click', function() {
			sidebar.classList.add('show');
	});

	closeSidebar.addEventListener('click', function() {
			sidebar.classList.remove('show');
	});

	// Profil rasmini kattalashtirib ko'rsatish
	profilePic.addEventListener('click', function() {
			modal.style.display = 'flex';
			modalImage.src = this.src;
	});

	closeModal.addEventListener('click', function() {
			modal.style.display = 'none';
	});

	// Dark mode almashtirish
	darkModeToggle.addEventListener('click', function() {
			document.body.classList.toggle('dark-mode');
	});
});
