import { Hero } from '@/components/scenes/Hero';
import { Breath } from '@/components/scenes/Breath';
import { FitStudy } from '@/components/scenes/FitStudy';
import { Tubeset } from '@/components/scenes/Tubeset';
import { Workshop } from '@/components/scenes/Workshop';
import { Gallery } from '@/components/scenes/Gallery';
import { Order } from '@/components/scenes/Order';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />

      <Breath
        italic
        text="После 600 километров я перестал думать о том, что сижу на велосипеде. Просто ехал."
        meta="— А. К., заезд Париж—Брест—Париж, 2023 год · владелец рамы №31"
      />

      <FitStudy />

      <Breath
        text="Итальянская сталь Columbus Spirit — самая лёгкая из четырёх, около 1,2 кг на комплект труб. Подходит велосипедистам до 90 кг, которые ездят налегке, без переднего багажа."
        meta="если эти детали кажутся вам шумом — значит, выбор материала не ваша задача, а моя"
      />

      <Tubeset />

      <Breath
        text="2023 год. Заезд Париж—Брест—Париж — 1219 км за 84 часа без сна. На старте было четыре велосипеда Ostov у четырёх разных велосипедистов. На финише — те же четыре."
      />

      <Workshop />

      <Breath
        italic
        text="Техническим языком объяснить не смогу. На длинной дистанции эта рама не утомляет посадкой — на трёхсотом километре ты такой же, как на пятидесятом. Не больной, не уставший от того, что сидишь."
        meta="— М. С., заезд Лондон—Эдинбург—Лондон, 2022 год · владелец рамы №22"
      />

      <Gallery />

      <Breath
        text="Английская сталь Reynolds 853 — после пайки шов почти такой же прочный, как сама труба. Рама переживает падения, которые алюминиевую разбили бы вдребезги."
        meta="подходит велосипедистам 75—110 кг, для смешанных маршрутов с асфальтом и грунтом"
      />

      <Order />

      <Footer />
    </main>
  );
}
