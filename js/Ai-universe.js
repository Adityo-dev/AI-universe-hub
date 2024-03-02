const loadAiCard = async (seeMore) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
    const data = await res.json();
    const tools = data.data.tools;
    displayAiCard(tools, seeMore);
}

const displayAiCard = (tools, seeMore) => {
    const aiCardContainer = document.getElementById('ai-Card-Container');
    aiCardContainer.innerHTML = '';


    if (!seeMore) {
        tools = tools.slice(0, 5);
    }

    tools.forEach(tool => {
        // console.log(tool);

        const aiCard = document.createElement('div');
        aiCard.classList = `card bg-gray-50 shadow-xl p-4`;
        aiCard.innerHTML = `
        <figure><img src="${tool.image}" alt="Shoes" />
        </figure>
        <div class="card-body">
            <h2 class="card-title text-[20px] text-black font-serif ">Features</h2>
            <ul>
               <li>${tool.features[0]}</li>
               <li>${tool.features[1]}</li>
               <li>${tool.features[2]}</li>
            </ul>
            <hr class ="my-2">
            <p class ="text-2xl text-black font-serif">${tool.name}</p>
            <p><i class="fa-regular fa-calendar-days"></i> ${tool.published_in}</p>
            <div class="card-actions justify-end">
                <button onclick="handelShowDetails('${tool.id}')" class="btn bg-rose-100 hover:bg-red-300 rounded-[53%] border-none"><i class="fa-solid fa-arrow-right text-red-500 hover:text-red-100"></i></button>
            </div>
        </div>
        `;
        aiCardContainer.appendChild(aiCard);

    })
}

const handelShowDetails = async (id) => {
    console.log('click', id);
    const res = await fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`);
    const data = await res.json();
    const singleAiDate = data.data;
    displayShowDetails(singleAiDate)
}

const displayShowDetails = (singleAiDate) => {
    console.log(singleAiDate);
    const displayDetalisContainer = document.getElementById('display-details-container');
    const detailsContainer1 = document.getElementById('details-container1');
    const detailsContainer2 = document.getElementById('details-container2');
    displayDetalisContainer.appendChild(detailsContainer1, detailsContainer2);
    detailsContainer1.innerHTML = `
    <img class="mb-6" src="${singleAiDate.image_link[0]}" alt="">
    <h3 class="font-bold text-lg text-stone-600 ">${singleAiDate.input_output_examples[0].input}</h3>
    <p class="py-4">${singleAiDate.input_output_examples[0].output}</p>
    <h3 class="font-bold text-lg text-stone-600 ">${singleAiDate.input_output_examples[1].input}</h3>
    <p class="py-4">${singleAiDate.input_output_examples[1].output}</p>
    `;

    detailsContainer2.innerHTML = `
    <h3 class="font-bold text-lg text-stone-600 ">${singleAiDate.description}</h3>
    <div class="md:flex  md:gap-4 text-center mt-12 mx-auto">
       <div class="bg-gray-100 p-2 rounded-lg text-amber-400 font-extrabold ">
          <p>${singleAiDate.pricing[0].price}</P>
          <p>${singleAiDate.pricing[0].plan}</P>
       </div>

       <div class="bg-gray-100 p-2 rounded-lg text-green-500 font-extrabold ">
          <p>${singleAiDate.pricing[0].price}</P>
          <p>${singleAiDate.pricing[0].plan}</P>
       </div>

       <div class="bg-gray-100 p-2 rounded-lg text-violet-700 font-extrabold">
          <p>${singleAiDate.pricing[0].price}</P>
          <p>${singleAiDate.pricing[0].plan}</P>
       </div>
    </div>

    <div class="mt-6">

        <div>
           <h3 class="text-2xl text-stone-600 font-extrabold mb-2">Features</h3>
          <ul= 1 ">
            <li>${singleAiDate.features[1].feature_name}</li>
            <li>${singleAiDate.features[2].feature_name}</li>
            <li>${singleAiDate.features[3].feature_name}</li>
          </ul>
        </div>

        <div>
           <h3 class="text-2xl text-stone-600 font-extrabold my-2">Integrations</h3>
          <ul= 1>
            <li>${singleAiDate.integrations[0]}</li>
            <li>${singleAiDate.integrations[1]}</li>
            <li>${singleAiDate.integrations[2]}</li>
          </ul>
        </div>
    </div>

    `;
    // model function 
    ai_display_modal.showModal()
}
const seeMore = () => {
    loadAiCard(true)
}



loadAiCard()