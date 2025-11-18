<script setup>
// (Por ahora no necesitamos script, pero lo dejamos listo)
</script>

<template>
  <div class="contact-page" id="contacto">
    <div class="section-title">
      <h2>Contáctame</h2>
      <p>¡Estoy abierto a nuevas oportunidades!</p>
    </div>

    <div class="contact-links">
      
      <a 
        href="mailto:manuelromoo123@gmail.com" 
        class="contact-link email"
        target="_blank"
      >
        <span class="icon">📧</span>
        <span class="text">manuelromoo123@gmail.com</span>
      </a>
      
      <a 
        href="tel:+524759512328" 
        class="contact-link phone"
        target="_blank"
      >
        <span class="icon">📞</span>
        <span class="text">(+52) 4759512328</span>
      </a>
      
      <a 
        href="https://github.com/tu-usuario-github" 
        class="contact-link github"
        target="_blank"
      >
        <span class="icon">🐙</span>
        <span class="text">GitHub</span>
      </a>

      <a 
        href="https://linkedin.com/in/tu-usuario-linkedin" 
        class="contact-link linkedin"
        target="_blank"
      >
        <span class="icon">💼</span>
        <span class="text">LinkedIn</span>
      </a>

    </div>
  </div>
</template>

<style scoped>
.contact-page {
  min-height: 50vh; /* Que ocupe al menos media pantalla */
  padding: 60px 40px;
  background-color: #ffffff; /* Un fondo oscuro para variar */
  color: #0e0d0d;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.section-title {
  text-align: center;
  margin-bottom: 40px;
}

.section-title h2 {
  font-size: 2.5em;
  font-weight: bold;
}

.section-title p {
  font-size: 1.2em;
  color: #1b1b1b;
}

.contact-links {
  display: flex;
  flex-wrap: wrap; /* Para que se vea bien en celulares */
  gap: 25px;
  justify-content: center;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 15px;
  background-color: #6b6b6b;
  padding: 15px 25px;
  border-radius: 8px;
  text-decoration: none;
  color: #fff;
  font-size: 1.1em;
  font-weight: bold;
  transition: all 0.3s ease;
  min-width: 250px; /* Ancho mínimo para cada botón */
}

.contact-link .icon {
  font-size: 1.5em;
}

.contact-link:hover {
  transform: translateY(-5px); /* Efecto al pasar el mouse */
  background-color: #007bff; /* Color de acento */
}

/* Colores específicos */
.contact-link.email:hover {
  background-color: #ea4335; /* Color de Gmail */
}
.contact-link.phone:hover {
  background-color: #34a853; /* Color de "Phone" */
}
.contact-link.github:hover {
  background-color: #ffffff; /* Color de GitHub */
}
.contact-link.linkedin:hover {
  background-color: #0a66c2; /* Color de LinkedIn */
}
</style>