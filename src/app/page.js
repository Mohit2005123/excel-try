import SpreadsheetComponent from './components/SpreadsheetComponent';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 overflow-x-auto px-0">
      {/* px-0 removes padding from the sides */}
      <div className="w-full">
        <SpreadsheetComponent />
      </div>
    </div>
  );
}
