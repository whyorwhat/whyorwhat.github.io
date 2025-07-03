export default function Footer() {
const currentYear = new Date().getFullYear();

return (
<footer className="text-center py-2 bg-gray-50">
<p className="text-gray-500 text-[10px] font-mono">
  &copy; {currentYear} Simone Cotardo All Rights Reserved.
</p>
</footer>
);
}