var config = {
    style: 'mapbox://styles/sravanthi-m/cl1c13e81002t14qqddjuz9vb',    //'mapbox://styles/mapbox/streets-v11',
    accessToken: 'pk.eyJ1Ijoic3JhdmFudGhpLW0iLCJhIjoiY2t4c29ocmplMTU4NjJ1bXZsZ3VxNmJvciJ9.fd68TkQDj0yMujir38PotQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'Tree plantations in Himachal Pradesh and why they could go waste',
	//image: 'H:/TechForWildlife/TreePlantingHP/upgradedStoryMap/mapbox-storytelling-upgraded-main/src/images/TFWLogo.svg'
    logo:'images/Mongabay_India_x_TfW_Logo_for_WhiteBG.svg',
	//logo: 'H:/TechForWildlife/TreePlantingHP/upgradedStoryMap/mapbox-storytelling-upgraded-main/src/images/MongabayBug.svg',
    //subtitle: 'we can put some text here',
    byline: 'By: Technology for Wildlife Foundation and Mongabay India',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
		{
            id: 'backgroundImage',
            alignment: 'full',
            title: 'Tree planting in Himachal Pradesh',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hill_scenery_with_small_stream%2C_somewhere_in_Himachal_Pradesh%2C_India.jpg/800px-Hill_scenery_with_small_stream%2C_somewhere_in_Himachal_Pradesh%2C_India.jpg?20220118120757',
            description: 'Tree planting is widely promoted as a natural solution to restore forests and absorb carbon from the atmosphere. India places heavy emphasis and budgets on tree planting in its global climate change goals. But how effective will tree plantations be? A study analysing afforestation activities in Himachal Pradesh predicts that over half of the budget spent will be wasted on plantations that unlikely to survive or help increase forest cover.',
            location: {
                center: [76.274342, 32.107912],
                zoom: 8,
                pitch: 0.00,
                bearing: 0.00
            },
			onChapterEnter: [
                
            ],
            onChapterExit: [
                
            ]
		},
        

        {
            id: 'only-plantations',
            alignment: 'left',
            hidden: false,
            title: 'Tree plantations in the Himalayan state',
            image: 'images/page 2 inset.jpg',
            description: 'As per Himachal Pradesh Forest Department records, 2,809 plantations were planted between January 2016 and July 2019. The map represents 2,024 plantations with complete data. The data for the remaining 785 plantations was missing, as per the study. Government-owned land was largely preferred for the plantation activity. Community-owned lands and areas with contested boundaries were also chosen. Following national goals of increasing tree cover, the state aims to bring 30% of its total geographical area (55,673 km sq.) under forest cover by 2030. The current forest cover is 27.72%.',
            location: {
                center: [76.513467, 31.692998], 
                zoom: 7,
                pitch: 40,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'treeplantinghp',
                     opacity: 1,
                     //duration: 5000
                 },
				 {
					 layer:'heatMap',
					 opacity:0
				 },
				
                {
                    layer:'heatMapCost',
                    opacity:0
                }
            ],
            onChapterExit: [
                 
            ]
        },
        
        {
            id: 'cost-heat-map',
            alignment: 'left',
            hidden: false,
            title: 'How much was spent?',
            image: 'images/page 3 inset.jpg',
            legend: '<span style="font-size: 0.85em;"><em> Cost Heat Map ($)</em></br><span style="width: 15px; height: 15px; margin:auto; display: inline-block; border: 1px solid gray; vertical-align: middle; border-radius: 2px; background: #31a354; "></span><span>  0 - 27</span></br><span style="width: 15px; height: 15px; margin:auto; display: inline-block; border: 1px solid gray; vertical-align: middle; border-radius: 2px; background: #addd8e; "></span><span>  27 - 8962</span></br><span style="width: 15px; height: 15px; margin:auto; display: inline-block; border: 1px solid gray; vertical-align: middle; border-radius: 2px; background: #fec44f; "></span><span>  8962 - 17896</span></br><span style="width: 15px; height: 15px; margin:auto; display: inline-block; border: 1px solid gray; vertical-align: middle; border-radius: 2px; background: #d95f0e; "></span><span>  17896 - 26831</span></br><span style="width: 15px; height: 15px; margin:auto; display: inline-block; border: 1px solid gray; vertical-align: middle; border-radius: 2px; background: #FF0000; "></span><span>  26831 - 35765.1</span></span>',
			//legend: '<p style="font-size: 12px;line-height: 24px;font-weight: normal;color: #848484;padding: 0;margin: 0;"><b>COLOR:</b> <span style="width: 15px; height: 15px; margin:auto; display: inline_block; border: 1px solid gray; vertical-align: middle; border-radius: 2px; background: #FF0000 "></span> </p>'
			description: '<p>The state Forest Department spent $5.67 million (about Rs. 43.4 crores) on 2,024 plantations. The amount per plantation ranged from $27 (about Rs. 2,000) to $35765.7 (about Rs. 27 lakhs). The forest department was obligated to release the data after an MLA raised a question about afforestation spending in the parliament, which led to the data becoming available for public.</p><p>A.  Nonforest unproductive areas 47.7% of plantation spending $2.7 million</p><p>B. forests with extensive southern exposure (33%, $1.86 million).</p><p>C. Forests where contested land tenure (28.9%, $1.64 million).</p><p>D. forests that already have more than 40% canopy cover (38.1%, 2.6 million) between 2016 and 2019.</p>',

            location: {
                center: [76.513467, 31.692998],
                zoom: 7,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'treeplantinghp',
                     opacity: 0,
                     //duration: 5000
                 },
                 {
					layer:'heatMapCost',
					opacity:1
				},
				 {
					 layer:'heatMap',
					 opacity:0
				 }
				
            ],
            onChapterExit: [
                 
				
            ]
        },

        {
            id: 'heat-map',
            alignment: 'left',
            hidden: false,
            title: 'Predicted mortality',
            image: 'images/page 4 inset graph.jpg',
			legend: '<span style="font-size: 0.85em;"><em>Mortality Heat Map (%)</em></br><span style="width: 15px; height: 15px; margin:auto; display: inline-block; border: 1px solid gray; vertical-align: middle; border-radius: 2px; background: #31a354; "></span><span>  0 - 5</span></br><span style="width: 15px; height: 15px; margin:auto; display: inline-block; border: 1px solid gray; vertical-align: middle; border-radius: 2px; background: #addd8e; "></span><span>  5 - 28</span></br><span style="width: 15px; height: 15px; margin:auto; display: inline-block; border: 1px solid gray; vertical-align: middle; border-radius: 2px; background: #fec44f; "></span><span>  28 - 51</span></br><span style="width: 15px; height: 15px; margin:auto; display: inline-block; border: 1px solid gray; vertical-align: middle; border-radius: 2px; background: #d95f0e; "></span><span>  51 - 74</span></br><span style="width: 15px; height: 15px; margin:auto; display: inline-block; border: 1px solid gray; vertical-align: middle; border-radius: 2px; background: #FF0000; "></span><span>  74 - 98</span></span>',
            description: '<p>Researchers combined data on the location, site conditions, and budgets, with a machine learning model, trained on past land cover change, to predict the likelihood of future tree cover loss in plantation areas. They found over half of the state’s tree planting budget is wasted on plantations that are unlikely to survive and/or are poorly designed to achieve the state’s goal of increasing forest cover. Reasons for tree mortality as predicted by the study:</p><p>1. Trees were planted in non-forest unproductive areas.</p>2. Trees were planted in areas with extensive southern exposure.</p><p>3. Forests with contested land tenure.</p><p>4. Forests that have more than 40% canopy cover.</p>',
            location: {
                center: [76.513467, 31.692998],
                zoom: 7,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'treeplantinghp',
                     opacity: 0,
                     //duration: 5000
                 },
				 {
					 layer:'heatMap',
					 opacity:1
				 },
				{
					layer:'heatMapCost',
					opacity:0
				}
            ],
            onChapterExit: [
                 
            ]
        },
{
    id: 'seventh-identifier',
    alignment: 'left',
    hidden: false,
    title: 'Planting in unproductive areas - Killar',
    image: 'images/page 5_6 inset graph.jpg',
    description: 'Areas such as Killar on the gorge of the Chenab river are non-forest unproductive areas which have negligible tree growth. Tree cover loss is likely to be high if plantations are carried out in such areas where environmental conditions act as natural barriers to growing trees. About 48% (USD 2.7 million) of the afforestation budget was spent in such areas. According to the study, tree plantations were also undertaken in the non-forest, cold desert areas of Spiti Valley.',
    location: {
        center: [76.427, 33.104],
        zoom: 13,
        pitch: 8,
        bearing: 0,
        // flyTo additional controls-
        // These options control the flight curve, making it move
        // slowly and zoom out almost completely before starting
        // to pan.
        //speed: 2, // make the flying slow
        //curve: 1, // change the speed at which it zooms out
    },
    mapAnimation: 'flyTo',
    rotateAnimation: false,
    callback: '',
    onChapterEnter: [
    {
             layer: 'heatMapCost',
             opacity: 0,
             //duration: 5000
         },
          {
             layer:'treeplantinghp',
             opacity:1
         },
        {
            layer:'killardhar-notforest',
            opacity:1,
            //duration: 5000
        }
         ],
    onChapterExit: [

    ]
},

		{
            id: 'fifth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Planting in areas with high tree cover - Chargathi',
            image: 'images/page 5_6 inset graph.jpg',
            description: 'The study finds plantations also occurred  in areas with high tree cover, such as Chargati where planting is likely unnecessary to maintain forest. Nearly 38% of the afforestation budget (USD 2.6 million) was allocated to areas that already had moderate or high tree density. On the contrary, only 14% of the spending goes to forest areas with canopy cover between 10% and 40% where reforestation potential is most likely to be high.',
            location: {
                center: [77.102, 31.498],
                zoom: 13,
                pitch: 8,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
			{
                     layer: 'heatMapCost',
                     opacity: 0,
                     //duration: 5000
                 },
				  {
					 layer:'treeplantinghp',
					 opacity:0
				 },
				{
					layer:'chargati-hightreecoverdensity',
					opacity:1,
                    duration: 5000
				}
				 ],
            onChapterExit: [
			
				]
        },

		{
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Planting in unsuitable areas - Behnota',
            image: '',//./path/to/image/source.png',
            description: 'About one-third of the tree plantation budget (USD 1.86 million) was spent in areas with extensive southern exposure i.e areas that receive direct sun through most of the year. Here, dryness is likely to limit tree growth.',
            location: {
                center: [76.188, 32.789],
                zoom: 13,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
			{
                     layer: 'behnota-high-south-exposure',
                     opacity: 1,
                     duration: 5000
                 },
				  {
					 layer:'heatMapCost',
					 opacity:0
				 },
				{
					layer:'treeplantinghp',
					opacity:1
				}
				 ],
            onChapterExit: [
				]
        },
		
{
    id: 'eighth-identifier',
    alignment: 'left',
    hidden: false,
    title: 'Planting in contested areas - Basaral-LandTenureConflicts',
    image: 'images/page 8_9 inset graph.jpg',//./path/to/image/source.png',
    description: 'In Himachal Pradesh, 67% of the land is under the forest department, but a vast chunk of these lands have overlapping uses and local communities have rights to access. One-third of the afforestation budget( $1.64 million) was directed at Undemarcated Protected Forests, a forest tenure type. UPFs are not notified and their boundaries are not marked on the ground, leading to contested boundaries with private or village-owned lands. Tree planting in contested areas can restrict access for pastoralists and forest dependent communities to resources including grazing, fodder, or fuelwood. It can lead to social conflicts and ultimately, plantations are less likely to survive.',
    location: {
        center: [76.369, 31.708],
        zoom: 13.5,
        pitch: 8,
        bearing: 0,
        // flyTo additional controls-
        // These options control the flight curve, making it move
        // slowly and zoom out almost completely before starting
        // to pan.
        //speed: 2, // make the flying slow
        //curve: 1, // change the speed at which it zooms out
    },
    mapAnimation: 'flyTo',
    rotateAnimation: false,
    callback: '',
    onChapterEnter: [
    {
             layer: 'heatMapCost',
             opacity: 0,
             //duration: 5000
         },
          {
             layer:'treeplantinghp',
             opacity:1
         },
        {
            layer:'basaral-landtenureconflicts',
            opacity:1,
            duration: 5000
        }
         ],
    onChapterExit: [

    ]
},

		        {
            id: 'fourth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Planting sans people participation - Rey Kangra',
            image: 'images/page 8_9 inset graph.jpg',///path/to/image/source.png',
            description: 'As per several studies, lack of local community buy-in and involvement can be a key reason for failure of afforestation activities. Only about 1% of tree planting funds ($0.06 million) went towards Cooperative Forest Societies - forests established by the government to ensure high participation of local communities in forest protection and management. The analysis revealed that the trees species were also mostly commercial timber trees and not species that would benefit rural communities which led to low motivation to actively support and safeguard a plantation.',
            location: {
                center: [75.871, 31.985],
                zoom: 13.5,
                pitch: 8,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'rey-kangra',
                    opacity: 1,
                    //duration: 5000
                },
                 {
                    layer:'heatMapCost',
                    opacity:0
                },
               {
                   layer:'treeplantinghp',
                   opacity:1
               }
            ],
            onChapterExit: [
                
            ]
        }/*
        {
            id: 'second-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Kangra District',
            image: '',//./path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [75.829, 32.058],
                zoom: 12,
                pitch: 8,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
			{
                     layer: 'heatMap',
                     opacity: 0,
                     //duration: 5000
                 },
				  {
					 layer:'treeplantinghp',
					 opacity:0
				 },
				{
					layer:'kangraDistrict',
					opacity:1,
                    //duration: 5000
				}
				 ],
            onChapterExit: [
				{ 		
					layer: 'heatMap',
					opacity: 0
				},
				 {
					 layer:'treeplantinghp',
					 opacity:0
				 },
				{
					layer:'kangraDistrict',
					opacity:1
				}
				]
        },
        

        {
            id: 'sixth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Khamera Kalan Land Tenure',
            image: '',//./path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [76.541, 31.420],
                zoom: 12,
                pitch: 8,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
			{
                     layer: 'heatMap',
                     opacity: 0,
                     //duration: 5000
                 },
				  {
					 layer:'treeplantinghp',
					 opacity:0
				 },
				{
					layer:'khamera-kalan-landtenure',
					opacity:1,
                    duration: 5000
				}
				 ],
            onChapterExit: [
				{ 		
					layer: 'heatMap',
					opacity: 0
				},
				 {
					 layer:'treeplantinghp',
					 opacity:0
				 },
				{
					layer:'khamera-kalan-landtenure',
					opacity:0
				}
    ]
},


{
    id: 'ninth-identifier',
    alignment: 'left',
    hidden: false,
    title: 'Sach Dhar Non Forest',
    image: '',//./path/to/image/source.png',
    description: 'Copy these sections to add to your story.',
    location: {
        center: [76.503, 33.014],
        zoom: 12,
        pitch: 8,
        bearing: 0,
        // flyTo additional controls-
        // These options control the flight curve, making it move
        // slowly and zoom out almost completely before starting
        // to pan.
        //speed: 2, // make the flying slow
        //curve: 1, // change the speed at which it zooms out
    },
    mapAnimation: 'flyTo',
    rotateAnimation: false,
    callback: '',
    onChapterEnter: [
    {
             layer: 'heatMap',
             opacity: 0,
             //duration: 5000
         },
          {
             layer:'treeplantinghp',
             opacity:0
         },
        {
            layer:'sach-dhar-nonforest',
            opacity:1,
            //duration: 5000
        }
         ],
    onChapterExit: [
        { 		
            layer: 'heatMap',
            opacity: 0
        },
         {
             layer:'treeplantinghp',
             opacity:0
         },
        {
            layer:'sach-dhar-nonforest',
            opacity:0
        }

    ]
}*/
]}
