document.querySelectorAll('.materia input[type="checkbox"]').forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    document.querySelectorAll('.materia').forEach((materia) => {
      const correlativas = materia.dataset.correlativas.split(',');
      const habilitada = correlativas.every((id) =>
        document.getElementById(id)?.checked
      );
      const input = materia.querySelector('input');
      if (!input.checked) input.disabled = !habilitada;
    });
  });
});
