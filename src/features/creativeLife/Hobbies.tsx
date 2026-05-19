export default function Hobbies() {
  return (
    <>
      <section className="py-section-gap w-full max-w-7xl px-12 lg:px-4">
        <div className="mb-stack-lg flex items-end justify-between">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-stone-800">My Hobbies</h2>
            <p className="font-body-md text-body-lg text-stone-500 italic">
              The textures of a creative life.
            </p>
          </div>
        </div>
        <div className="grid h-auto grid-cols-1 gap-6 md:grid-cols-12">
          <div className="custom-shadow flex flex-col justify-between rounded-xl border-none bg-white p-8 md:col-span-8">
            <div className="max-w-md">
              <div className="text-primary mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined" data-icon="palette">
                  palette
                </span>
                <span className="font-label-md">Artistry</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-2 text-stone-800">
                Watercoloring
              </h3>
              <p className="font-body-md mb-6 text-stone-600">
                Capturing the translucency of light through pigment and water. It's a lesson in
                letting go and embracing beautiful accidents.
              </p>
            </div>
            <div className="grid h-64 grid-cols-2 gap-4">
              <img
                alt="Watercolor brushes"
                className="h-full w-full rounded-lg object-cover"
                data-alt="Close-up of a delicate watercolor painting featuring soft floral motifs in coral and sunflower yellow. The paper has a thick, tactile texture, and the background is a clean, bright cream. Sunlight filters through a window, casting soft, warm shadows across the pigments as they blend naturally."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCh60eV6G8baAE95hUp5NY3DaWOqxpfeuo-kxpbdKn-mfgDr2yrxBNH-1oosYpDBBI79yWpEh_cNtkBa1QlQNE4CgZjVm7xtEg-rvnQFA9sLhgZKr7ndVpFnT8zC0eRdjbdxchZKX3QOvlAL4aLJxivtNVELVyZEoV2cSsvM9RoZEl6aGHIU-9qabfiGDQ_EVSj25BKba-PhVsMX4fInDLXifAylx5cA-ma-q4fhohmp6snGNYuVNXEwu5SCf0CyM5u93TDrmy6tq-3"
              />
              <img
                alt="Watercoloring detail"
                className="h-full w-full rounded-lg object-cover"
                data-alt="A person's hands gently holding a watercolor brush, dipping it into a palette of warm amber and terracotta tones. The lighting is golden and atmospheric, highlighting the movement of the brush. The overall aesthetic is minimalist, artistic, and deeply focused on the tactile experience of painting."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvUnQ5yPcNFOxKj8rtCB6Vv2tFE8YquMdTFwpg7RYJv_xuGzP_E_golA9fFErTKQW6uNUAABcRVywJNAUZI7mGqbZGXrxH8fxyqiMvC84-gloV0dLlNH9HxtzGYDQwfrmsRAHdVIAK6ORB8Z0RmhRwgxaF9n_dgoUBjBIu7r1Vnp6Du3S7KSqtino7nu27Mr1LytkFpLimB0aA0YVrUcNDGMzF0erblFB2As6weGQ1OhbwUfMUfUAjwYBQYvXOTH5oQeBJE22ZQq90"
              />
            </div>
          </div>
          <div className="bg-secondary-container/10 custom-shadow flex flex-col rounded-xl border-none p-8 md:col-span-4">
            <div className="text-secondary mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined" data-icon="gesture">
                gesture
              </span>
              <span className="font-label-md">Traditional Craft</span>
            </div>
            <h3 className="font-headline-md text-headline-md mb-2 text-stone-800">
              Pateh Embroidery
            </h3>
            <p className="font-body-md mb-6 text-stone-600">
              The rhythmic dance of needle and thread on hand-dyed wool fabrics. Each stitch is a
              prayer of patience.
            </p>
            <div className="mt-auto overflow-hidden rounded-lg">
              <img
                alt="Pateh detail"
                className="h-64 w-full object-cover transition-transform duration-500 hover:scale-110"
                data-alt="Detailed view of intricate Pateh embroidery on a warm cream wool base. The threads are vibrant shades of sunset orange and deep gold, forming complex geometric and floral patterns. The lighting is soft and directional, emphasizing the physical height and texture of the embroidery stitches."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpDhFbKXmoY13e4QMK54jZSnoS-0v1yMHpyjG9_mm8H-C5vy5CDHdZOHvr-6ybTO2ac_ouQCArA5qFSrjAqnXCIOrBs6E1UPO2Skjdv0tTqY1bv79A5cQFEqYZaJZHWGlXEdRaFpTBYrOzk3ZJ0Pqt8yEvXqLgjk93d5g6N6cUeONSQ1jvbJRNcI6PeV4SaRfGGEDLO8Jy-P0bbvvdDCBBTrybocgfRijeHui34XEfMPmV1zCH9rzOothOAD_CxMsStITggG_H_EEM"
              />
            </div>
          </div>
          <div className="bg-primary-container/10 custom-shadow flex flex-col rounded-xl border-none p-8 md:col-span-4">
            <div className="text-primary mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined" data-icon="bakery_dining">
                bakery_dining
              </span>
              <span className="font-label-md">Nourishment</span>
            </div>
            <h3 className="font-headline-md text-headline-md mb-2 text-stone-800">
              Artisan Baking
            </h3>
            <p className="font-body-md mb-6 text-stone-600">
              The science of flour and water becoming something warm and shared. My kitchen is my
              sanctuary.
            </p>
            <div className="mt-auto h-48 overflow-hidden rounded-lg">
              <img
                alt="Bread baking"
                className="h-full w-full object-cover"
                data-alt="A rustic sourdough loaf resting on a linen cloth, dusted with a light coating of flour. The lighting is high-key and warm, typical of a sunny morning kitchen. The background is a soft, minimalist cream, making the golden-brown crust of the bread stand out as the primary focus."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbbnHV6sndSoL_TYras7Flw6fCLTmmgEBWlGsYPKMbyK-B-YMzvmvjwA2JPq6p1uJO7dispqbLNIHn3krIZAfyoY3fm1PH2tEtnD0J1Qt7NZPFL1XgnqFKDpsBPpOkPsT22tUNG-GHP3kT_xw-AhBDI4HR8yOvi82K5EsKH-lW1rldAvZbOwOdPuFM_U-AOxM6wRomduNS3jrfpHxJelkLzC7SK-zPnLPQEKKOEr6zV74VSIurhkbmrL6AvxVE1E9uk5dZT5i8u7_G"
              />
            </div>
          </div>
          <div className="bg-surface-container-lowest custom-shadow grid gap-8 rounded-xl border-none p-8 md:col-span-8 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <div className="text-tertiary mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined" data-icon="nature">
                  nature
                </span>
                <span className="font-label-md">Exploration</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-2 text-stone-800">
                Nature Journaling
              </h3>
              <p className="font-body-md text-stone-600">
                Observing the small changes in the local park—the way the light hits a leaf, the
                first bloom of spring. It's a dialogue with the earth.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-lg">
              <img
                alt="Nature Journal"
                className="h-full w-full object-cover"
                data-alt="An open sketchbook showing botanical drawings of local flora, accompanied by handwritten notes in elegant script. The pages are a soft cream color, and the illustrations use light washes of yellow and coral. Dried flowers are scattered next to the journal on a sunlit wooden deck, creating a sense of serene connection with nature."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVGqM6J8gsoeRLisWUE1IhUHVN3oRKcru1DREuvZVR_M6cemuAw1JNkCytf0Ay3cDh5XaLMaQt6ZTQXq0Yydh135DXv5YcueSv-seg6E0dwNLSxbJo0TswFyfToDQYjs6rGzy8Z-Knr4P0dON95oBVUK7LgltsLnrpr2XgrHgWgm2sLCaqvGbcPl_9REXfqIv2UdbtpPQoNi-Yk3IeT3_3UIqRvJkXpix86YJ7TVbBYvkmWpd7YCqsPvtsAETlML-ZsDFOrTHRm4BC"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-section-gap w-full max-w-7xl px-12 lg:px-4">
        <div className="mb-stack-lg mx-auto max-w-3xl text-center">
          <h2 className="font-headline-lg text-headline-lg text-stone-800">Process Journal</h2>
          <p className="font-body-lg mt-2 text-stone-500 italic">
            Thoughts from the studio and the field.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <article className="group cursor-pointer">
            <div className="mb-stack-md custom-shadow relative aspect-[4/5] overflow-hidden rounded-xl">
              <img
                alt="Journal entry 1"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-alt="A minimalist overhead shot of an artist's journal entry. The page contains rough pencil sketches and color swatches in earthy yellows and warm oranges. A vintage fountain pen rests on the page, and the overall composition is balanced with plenty of white space and soft, diffused sunlight."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBS0lE0x7CdKGPKcNP1RmNq4GPKzkdl3zhJe0OBW66jWt8zJGb6gGqBPi-Ge6bfB_wbnDlc2rmM27nyrkuQh1pa7aOM2KnJ5XtNb2ciH7d2uPKoPJ4CtUWNnaWM4fXormdCPv-G-fv2_QfHCXCzk0rvxdPB_32AAFYQqBDuXoGETFvfM994J2u-4NfBTz81xc4viiU-VK5M-slbYCUTeygLb8iiCHy0ktXHSQuYxymRn7CAerDWDOIT9yPS2EQaN9Ty2zpgXpZpVPwQ"
              />
              <div className="font-label-sm absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-stone-600 backdrop-blur-md">
                Sept 12
              </div>
            </div>
            <h4 className="font-headline-md text-headline-md group-hover:text-primary mb-1 text-stone-800 transition-colors">
              The Weight of a Stitch
            </h4>
            <p className="font-body-md line-clamp-2 text-stone-500">
              Today I spent three hours on a single petal of a Pateh design. There is a specific
              kind of silence that only happens when you are counting threads...
            </p>
          </article>
          <article className="group cursor-pointer">
            <div className="mb-stack-md custom-shadow relative aspect-[4/5] overflow-hidden rounded-xl">
              <img
                alt="Journal entry 2"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-alt="An atmospheric photo of a bowl of rising dough in a warm, cream-colored kitchen. Flour is lightly dusted across the surface, and the morning sun creates long, soft shadows. The scene feels organic, tactile, and peaceful, embodying the patience required in the baking process."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_4gyOY_qXqg40XuD9tS2V6y49gGL1vhqUhk0huD-dCczBroiPwb7pLULYika74xPj_xumYyYSq0cIDEZa5SWKwphDo0BXwHw8_XSWEE4BB5xTm2bEeWv0-AEmWrNfA7LVUV4wlRdtSmlo4PISiN9okzzt8927Ns2W6geiYsx_eFokS4oKycWVgZPVHWC6GFLB4ee94XFR_EbUbNDHNk5M7_p19eIxkOYO0BY3Jrkq0MCS6-ayB3NzNu7m0uwfFL5loZvMcn4gbwoG"
              />
              <div className="font-label-sm absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-stone-600 backdrop-blur-md">
                Aug 28
              </div>
            </div>
            <h4 className="font-headline-md text-headline-md group-hover:text-primary mb-1 text-stone-800 transition-colors">
              Yeast and Patience
            </h4>
            <p className="font-body-md line-clamp-2 text-stone-500">
              The kitchen was 74 degrees this morning. Perfect for the starter. I've realized that
              my best bread comes from the days when I'm not in a hurry.
            </p>
          </article>
          <article className="group cursor-pointer">
            <div className="mb-stack-md custom-shadow relative aspect-[4/5] overflow-hidden rounded-xl">
              <img
                alt="Journal entry 3"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-alt="A close-up shot of a glass jar filled with water and vibrant yellow paint mixing together in swirling patterns. The lighting is bright and clear, reflecting off the glass and the clean cream surface below. It captures the ephemeral and fluid nature of watercolor art in a minimalist, high-key style."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUC_ier0Il_FwuaG5Dx0Y2LTtas-ugPex-4v3DYSa6rfMylCQQ3U2Vc-_Ooc3NM9xMXqQNMgTa-0GdXV4ZYIFDz1PHH7ePjSbk0k3k1iHuyHSYw7bC0RZHWalsxMJ-CqaXDBgp28pwuY0KY96lsfPERFVe0gYJSTkwzWLhgUvb5IcptJNL6WjJYudxmMb4fSZjmu3tK8fL0lhjDt0d-q_O8TWh6knXgdi6DbgsR9McnVbSqoE79FAZa0nDXmFkTzCcGA40nblmVlFd"
              />
              <div className="font-label-sm absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-stone-600 backdrop-blur-md">
                Aug 15
              </div>
            </div>
            <h4 className="font-headline-md text-headline-md group-hover:text-primary mb-1 text-stone-800 transition-colors">
              Chasing the Bloom
            </h4>
            <p className="font-body-md line-clamp-2 text-stone-500">
              Trying to capture the exact shade of the sunflowers in the garden. Watercolors are
              elusive; they dry lighter than you think.
            </p>
          </article>
        </div>
        <div className="mt-12 text-center">
          <button className="font-label-md text-secondary border-secondary/20 hover:border-secondary border-b-2 pb-1 transition-all">
            View all journal entries
          </button>
        </div>
      </section>
    </>
  );
}
