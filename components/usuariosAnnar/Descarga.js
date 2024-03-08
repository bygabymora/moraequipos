import React from 'react';

const Descarga = () => {
  const handleDownload = async () => {
    try {
      const response = await fetch('/api/usuariosAnnar/export', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const blob = await response.blob();
        const downloadUrl = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = downloadUrl;
        a.download = 'exported_data.xlsx';
        document.body.appendChild(a);
        a.click();
        a.remove();
      } else {
        console.error('Failed to download file');
        alert('Failed to download the file.');
      }
    } catch (error) {
      console.error('Error downloading the file', error);
      alert('Error downloading the file.');
    }
  };

  return (
    <div className="text-center items-center">
      <h1>Usuarios Annar</h1>
      <button
        onClick={handleDownload}
        className="button button--flex btn-contact mt-3"
      >
        Download Excel
      </button>
    </div>
  );
};

export default Descarga;
