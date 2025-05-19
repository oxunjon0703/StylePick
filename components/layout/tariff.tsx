"use client";

interface Tariff {
    id: number;
  title: string;
  tarif_info: string;
  price: string;
  price_year: string;
}

const tariff: Tariff[] = [
    {
        id: 1,
        title: "FREE",
        price: "00.00 $/oy",
        price_year: "00.00 $/yil",
        tarif_info: `✅ Do‘konlardagi mahsulotlarni ko‘rish
        ✅ Narxlarni avtomatik solishtirish
        ✅ 2 marotabagacha o’z stillarini yaratishlari
        ✅ Asosiy filtrlar bo‘yicha qidiruv`,
    },
    {
        id: 2,
        title: "BASIC",
        price: "5.00 $/oy",
        price_year: "50.00 $/yil",
        tarif_info: `✅ Sotuvdagi eng sòngi mahsulotlarni birinchilardan bòlib kòrish
        ✅ 50 marotabagacha o’z stillarini yaratishlari
        ✅ Chegirma va maxsus takliflarga ega bòlish`,
    },
    {
        id: 3,
        title: "PRO",
        price: "10.00 $/oy",
        price_year: "100.00 $/yil",
        tarif_info: `✅ Maxsus stilist maslahati – foydalanuvchilarga kiyim tanlash bo‘yicha tavsiyalar
        ✅ “LookBook” – to‘liq obrazlar yaratish va tavsiya qilish
        ✅ Faqat premium foydalanuvchilar uchun maxsus promo-kodlar
        ✅ 3D kòrinishda òz stillarini cheksiz yaratish`,
    }
]

const Tariff = () => {
  return (
    <div className="bg-white w-full flex flex-col items-center py-10 px-4">
<div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
  {tariff.map((item) => (
    <div
      key={item.id}
      className="bg-white rounded-2xl shadow-lg border border-gray-200 flex flex-col items-center p-8 transition-transform hover:scale-105 h-full"
    >
      <div className="w-full border border-gray-300 rounded-xl shadow-md p-4 mb-4 bg-white flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-4 text-primary text-black text-center">{item.title}</h3>
        <div className="text-3xl font-extrabold mb-2 text-black text-center flex items-end justify-center w-full">
          <span className="text-5xl">
            {item.price.split(".")[0]}
          </span>
          <span className="text-xl ml-1">
            .{item.price.split(".")[1]}
          </span>
        </div>
        <div className="text-base mb-4 text-black text-center">{item.price_year}</div>
        <div className="mt-1 p-2 border-t color-[#0000000]"></div>
        <ul className="text-left whitespace-pre-line mb-6 text-black flex-1">
          {item.tarif_info}
        </ul>
      </div>
<div className="border border-gray-300 rounded-lg shadow p-2 bg-white mt-4 flex justify-center">
  <button
    className="text-base font-bold text-black px-5 py-2 rounded transition-colors"
    onClick={() => {
      window.location.href = "/#home";
    }}
  >
    SOTIB OLISH
  </button>
</div>
    </div>
  ))}
</div>
    </div>
  );
};

export default Tariff;
