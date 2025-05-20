import { NextIcon, PrevIcon } from "../../assets/icon";

interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ page, totalPages, onPageChange }: PaginationProps) => {
  return (
    <div className="mt-4 flex gap-2 items-center text-foreground">
      <button
        disabled={page <= 1}
        onClick={() => onPageChange(page - 1)}
        className="flex items-center justify-center px-3 h-8 text-sm font-medium bg-background text-foreground border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 disabled:bg-muted disabled:text-foreground"
      >
        <div className="inline-flex items-center">
          <PrevIcon />
          <span>Previous</span>
        </div>
      </button>
      <span className="text-sm text-foreground">
        Page {page} of {totalPages}
      </span>
      <button
        disabled={page >= totalPages}
        onClick={() => onPageChange(page + 1)}
        className="flex items-center justify-center px-3 h-8 text-sm font-medium bg-background text-foreground border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 disabled:bg-muted
disabled:bg-muted disabled:text-foreground"
      >
        <div className="inline-flex items-center">
          <span>Next</span>
          <NextIcon />
        </div>
      </button>
    </div>
  );
};

export default Pagination;
