import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export function handleDownloadPDF() {
    // Get the component's DOM element that you want to convert to PDF
    const componentRef = document.getElementById('report');
    
    const head = document.querySelector('.head');
    const edu = document.querySelector('.education');
    const work = document.querySelector('.work');
    head.style.paddingTop = '40px';
    head.style.paddingBottom = '20px';
    edu.style.paddingTop = '40px';
    work.style.paddingTop = '40px';

    // Convert the component to an image using html2canvas
    html2canvas(componentRef).then((canvas) => {
      // Create a new jsPDF instance
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      // Calculate the height ratio to fit the PDF page
      const imgData = canvas.toDataURL('public/png');
      const imgWidth = 210; // A4 page width (in mm)
      const pageHeight = imgWidth * (canvas.height / canvas.width);
      const imgHeight = pageHeight;
      
      // Add the image to the PDF
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      
      // Download the PDF with a specified name 
      pdf.save('your-cv.pdf');
      head.style.paddingTop = '16px';
      head.style.paddingBottom = '16px';
      edu.style.paddingTop = '0';
      work.style.paddingTop = '0';
      
    });
  }
  
