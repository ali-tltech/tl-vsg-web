// BlogPagination.jsx - Can be exported from NewsOne.jsx or as a separate file
const BlogPagination = ({ currentPage = 1, totalPages = 1, onPageChange }) => {
  if (totalPages <= 1) return null;
  
  const handlePageClick = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages && onPageChange) {
      onPageChange(pageNumber);
      
      // Scroll to top of blog section
      window.scrollTo({
        top: document.getElementById('blog-section')?.offsetTop - 100 || 0,
        behavior: 'smooth'
      });
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <li key={i} className={i === currentPage ? "active" : ""}>
          <a href="#" onClick={(e) => {
            e.preventDefault();
            handlePageClick(i);
          }}>
            {i}
          </a>
        </li>
      );
    }
    
    return pageNumbers;
  };

  return (
    <div className="blog-pagination">
      <ul className="pagination-list">
        {/* Prev Button */}
        <li className={`pagination-arrow ${currentPage <= 1 ? 'disabled' : ''}`}>
          <a href="#" onClick={(e) => {
            e.preventDefault();
            if (currentPage > 1) handlePageClick(currentPage - 1);
          }} aria-label="Previous">
            <span aria-hidden="true">Prev</span>
          </a>
        </li>
        
        {renderPageNumbers()}
        
        {/* Next Button */}
        <li className={`pagination-arrow ${currentPage >= totalPages ? 'disabled' : ''}`}>
          <a href="#" onClick={(e) => {
            e.preventDefault();
            if (currentPage < totalPages) handlePageClick(currentPage + 1);
          }} aria-label="Next">
            <span aria-hidden="true">Next</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default BlogPagination;