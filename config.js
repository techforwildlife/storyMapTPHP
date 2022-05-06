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
    title: 'Tree plantations in Himachal Pradesh and why they could go waste.',
	//image: 'H:/TechForWildlife/TreePlantingHP/upgradedStoryMap/mapbox-storytelling-upgraded-main/src/images/TFWLogo.svg'
    byline: 'Tree planting is widely promoted as a natural solution to restore forests and absorb carbon from the atmosphere.\nIndia places heavy emphasis and budgets on tree planting in its global climate change goals. But how effective will tree plantations be?\n\nScroll down to read the whole story.',
	logo:'images/Mongabay_India_x_TfW_Logo_for_WhiteBG.svg',
	//logo: 'H:/TechForWildlife/TreePlantingHP/upgradedStoryMap/mapbox-storytelling-upgraded-main/src/images/MongabayBug.svg',
    //subtitle: 'Tree planting is widely promoted as a natural solution to restore forests and absorb carbon from the atmosphere. India places heavy emphasis and budgets on tree planting in its global climate change goals. But how effective will tree plantations be? ',
    
    //mobileview: '<div id="rotate-mobile"><em>For optimal viewing of this storytelling map on mobile, rotate your device to a horizontal orientation.</em>',
	footer: 'Source: <a href="https://www.sciencedirect.com/science/article/abs/pii/S0305750X22000547" target="_blank">Predicting wasteful spending in tree planting programs in Indian Himalaya, World Development, June 2022 </a>', //template.<br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
		{
            id: 'backgroundImage',
            alignment: 'left',
            title: '',
            image: 'images/page 1 bg.jpg',
            description: 'A <a href="https://www.sciencedirect.com/science/article/abs/pii/S0305750X22000547" target="_blank">study</a> analysing afforestation activities in Himachal Pradesh predicts that over half of the budget spent will be wasted on plantations that are unlikely to survive or help increase forest cover.',
            location: {/*
                center: [76.274342, 32.107912],
                zoom: 6.2,
                pitch: 0.00,
                bearing: 0.00*/
				center: [76.513467, 31.692998], 
                zoom: 6.2,
                pitch: 40,
                bearing: 0
            },
			onChapterEnter: [
				{
					layer: 'mortality',
                     opacity: 0,
				},
				{
					layer: 'hp',
					opacity: 1,
				},
				{
					layer: 'treeplantinghp',
                     opacity: 0,
				},
				{
					layer: 'heatMap',
                     opacity: 0,
				},
				{
					layer: 'heatMapCost',
                     opacity: 0,
				},
				{
					layer: 'categoryHPCost',
                     opacity: 0,
				},
				{
					layer: 'terrain',
                     opacity: 0,
				},
				
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
            description: '<p>As per Himachal Pradesh Forest Department records, 2,809 plantations took place between January 2016 and July 2019. The map represents 2,024 plantations with complete data. The data for the remaining 785 plantations was missing, as per the study. On average, an individual plantation is 5.5 hectare in size.</p><p>Government-owned land was largely preferred for the plantation activity. Community-owned lands and areas with contested boundaries were also chosen.</p><p>Following national goals of increasing tree cover, the state aims to bring <a href="https://timesofindia.indiatimes.com/city/shimla/hp-aims-to-increase-30-forest-cover-by-2030/articleshow/74052138.cms?utm_campaign=cppst%26utm_medium=text%26utm_source=contentofinterest" target="_blank">30%;</a> of its total geographical area (55,673 km sq.) under forest cover by 2030. The current forest cover is 27.72%.</p>',
            location: {
                center: [76.513467, 31.692998], 
                zoom: 6.2,
                pitch: 40,
                bearing: 0
				//dragPan: false,
				//minZoom: 5,
				//bounds:[73.418945,30.373954, 80.371443,33.079329],
				//maxBounds: [73.418945,30.073954, 80.371443,33.979329]
            },
            //mapAnimation: 'flyTo',
            //rotateAnimation: false,
			//mapInteractive: true,
            //callback: '',
            onChapterEnter: [
                 {
                     layer: 'treeplantinghp',
                     opacity: 1,
                     //duration: 5000
                 },
				 {
					layer: 'mortality',
                     opacity: 0,
				},
				 {
					 layer:'heatMap',
					 opacity:0
				 },
				
                {
                    layer:'heatMapCost',
                    opacity:0
                },
				{
                    layer:'categoryHPCost',
                    opacity:0
                },
				{
					layer: 'terrain',
                    opacity: 0,
				},
				
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
            legend: '<span style="font-size: 0.85em;"><em> Plantation budget ($)</em></br><span style="width: 15px; height: 15px; margin:auto; display: inline-block; border: 1px solid gray; vertical-align: middle; border-radius: 2px; background: #55b12b; "></span><span>  0 - 27</span></br><span style="width: 15px; height: 15px; margin:auto; display: inline-block; border: 1px solid gray; vertical-align: middle; border-radius: 2px; background: #8ced54; "></span><span>  28 - 2500</span></br><span style="width: 15px; height: 15px; margin:auto; display: inline-block; border: 1px solid gray; vertical-align: middle; border-radius: 2px; background: #feb24c; "></span><span>  2501 - 5000</span></br><span style="width: 15px; height: 15px; margin:auto; display: inline-block; border: 1px solid gray; vertical-align: middle; border-radius: 2px; background: #fd8d3c; "></span><span>  5001 - 10000</span></br><span style="width: 15px; height: 15px; margin:auto; display: inline-block; border: 1px solid gray; vertical-align: middle; border-radius: 2px; background: #fc4e2a; "></span><span>  10001 - 20000</span></br><span style="width: 15px; height: 15px; margin:auto; display: inline-block; border: 1px solid gray; vertical-align: middle; border-radius: 2px; background: #e31a1c; "></span><span>  20001 - 30000</span></br><span style="width: 15px; height: 15px; margin:auto; display: inline-block; border: 1px solid gray; vertical-align: middle; border-radius: 2px; background: #b10026; "></span><span>  30001 - 36000</span></span>',
			//legend: '<p style="font-size: 12px;line-height: 24px;font-weight: normal;color: #848484;padding: 0;margin: 0;"><b>COLOR:</b> <span style="width: 15px; height: 15px; margin:auto; display: inline_block; border: 1px solid gray; vertical-align: middle; border-radius: 2px; background: #FF0000 "></span> </p>'
			description: '<p>The state Forest Department spent $5.67 million (about Rs. 434 million) on 2,024 plantations. The amount per plantation ranged from $27 (about Rs. 2,000) to $35,765.7 (about Rs. 2.7 million).</p><p>The forest department was obligated to release the data after a legislator raised a question about afforestation spending in the state legislature, which led to the data becoming available for public.</p>',

            location: {
                center: [76.513467, 31.692998],
                zoom: 6.2,
                pitch: 30,
                bearing: 0,
				dragPan: false
				
            },
            //mapAnimation: 'flyTo',
            //rotateAnimation: false,
			//mapInteractive: true
            //callback: '',
            onChapterEnter: [
		    {
					layer: 'mortality',
                     opacity: 0,
				},
                 {
					layer:'categoryHPCost',
					opacity:1
				},
				 {
                     layer: 'treeplantinghp',
                     opacity: 0,
                     //duration: 5000
                 },
                 
				 {
					 layer:'heatMap',
					 opacity:0
				 },
				 {
					 layer:'heatMapCost',
					 opacity:0
				 },
				 {
					layer: 'terrain',
                    opacity: 0,
				},
				
				
            ],
            onChapterExit: [
                 
				
            ]
        },

        {
            id: 'heat-map',
            alignment: 'left',
            hidden: false,
            title: 'Predicted Tree Mortality',
            image: 'images/page 4 inset graph.jpg',
			legend: '<span style="font-size: 0.85em;"><em>Predicted Mortality</em></br><span style="width: 15px; height: 15px; margin:auto; display: inline-block; border: 1px solid gray; vertical-align: middle; border-radius: 2px; background: #ffffb2; "></span><span>  0 - 0.2</span></br><span style="width: 15px; height: 15px; margin:auto; display: inline-block; border: 1px solid gray; vertical-align: middle; border-radius: 2px; background: #fecc5c; "></span><span>  0.2 - 0.4</span></br><span style="width: 15px; height: 15px; margin:auto; display: inline-block; border: 1px solid gray; vertical-align: middle; border-radius: 2px; background: #fd8d3c; "></span><span>  0.4 - 0.6</span></br><span style="width: 15px; height: 15px; margin:auto; display: inline-block; border: 1px solid gray; vertical-align: middle; border-radius: 2px; background: #f03b20; "></span><span>  0.6 - 0.8</span></br><span style="width: 15px; height: 15px; margin:auto; display: inline-block; border: 1px solid gray; vertical-align: middle; border-radius: 2px; background: #bd0026; "></span><span>  0.8 - 1.0</span></span>',
            description: '<p>Researchers combined data on the location, site conditions, and budgets, with a machine learning model, trained on past land cover change, to predict the likelihood of future tree cover loss in plantation areas. While the state’s goal is to increase forest cover, the study found that over half of the state’s tree planting budget is wasted on plantations that are unlikely to survive and/or are poorly designed.</p><p>The study predicted tree mortality due to plantation in the following types of places:</p><p>A. Non-forest unproductive areas.</p>B. Areas with extensive southern exposure</p><p>C. Forests with contested land tenure.</p><p>D. Forests that have more than 40% canopy cover.</p>',
            location: {
                center: [76.513467, 31.692998],
                zoom: 6.2,
                pitch: 20,
                bearing: 0
            },
            /*mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',*/
            onChapterEnter: [
                 {
                     layer: 'treeplantinghp',
                     opacity: 0,
                     //duration: 5000
                 },
				 {
					layer: 'mortality',
                     opacity: 1,
				},
				 {
					 layer:'heatMap',
					 opacity:0
				 },
				{
					layer:'heatMapCost',
					opacity:0
				},
				{
					 layer:'categoryHPCost',
					 opacity:0
				 },
				 {
					layer: 'terrain',
                    opacity: 0,
				}
            ],
            onChapterExit: [
                 
            ]
        },
{
    id: 'seventh-identifier',
    alignment: 'left',
    hidden: false,
    title: 'Planting where trees might not grow - Killar',
    image: 'images/page 5_6 inset graph.jpg',
    description: 'Areas such as Killar on the gorge of the Chenab river are non-forest unproductive areas which have negligible tree growth. Tree cover loss is likely to be high if plantations are carried out in such areas where environmental conditions act as natural barriers to growing trees. About 48% ($2.7 million) of the afforestation budget was spent in such areas. According to the study, tree plantations were also undertaken in the non-forest, cold desert areas of Spiti Valley.',
    location: {
        center: [76.427, 33.104],
        zoom: 12,
        pitch: 40,
        bearing: 0
        // flyTo additional controls-
        // These options control the flight curve, making it move
        // slowly and zoom out almost completely before starting
        // to pan.
        //speed: 2, // make the flying slow
        //curve: 1, // change the speed at which it zooms out
    },
    /*mapAnimation: 'flyTo',
    rotateAnimation: false,
    callback: 'turnPopupsOn(treeplantinghp)',*/
    onChapterEnter: [
    {
             layer: 'heatMapCost',
             opacity: 0,
             //duration: 5000
         },
		 {
             layer: 'heatMap',
             opacity: 0,
             //duration: 5000
         },
		 {
					layer: 'mortality',
                     opacity: 0,
				},
          {
             layer:'treeplantinghp',
             opacity:1
         },
        {
            layer:'killardhar-notforest',
            opacity:1,
            //duration: 5000
        },
		{
			layer: 'terrain',
			opacity: 1,
		},
		
         ],
    onChapterExit: [

    ]
},

		{
            id: 'fifth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Planting where there are a lot of trees - Chargati',
            image: 'images/page 5_6 inset graph.jpg',
            description: '<p>The study finds plantations also occurred  in areas with high tree cover, such as Chargati where planting is likely unnecessary to maintain forest.</p><p>Nearly 38% of the afforestation budget ($2.6 million) was allocated to areas that already had moderate or high tree density.</p><p>On the contrary, only 14% of the spending goes to forest areas with canopy cover between 10% and 40% where reforestation potential is most likely to be high.</p>',
            location: {
                center: [77.102, 31.498],
                zoom: 13,
                pitch: 40,
                bearing: 0
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            /*mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',*/
            onChapterEnter: [
			{
					layer: 'mortality',
                     opacity: 0,
				},
			{
                     layer: 'heatMapCost',
                     opacity: 0,
                     //duration: 5000
                 },
				 {
					layer: 'heatMap',
					opacity: 0,
					//duration: 5000
				},
				  {
					 layer:'treeplantinghp',
					 opacity:1
				 },
				{
					layer:'chargati-hightreecoverdensity',
					opacity:1,
                    duration: 5000
				},
				{
					layer: 'terrain',
                     opacity: 1,
				},
				
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
            description: 'About one-third of the tree plantation budget ($1.86 million) was spent in areas with extensive southern exposure i.e areas that receive direct sun through most of the year. Here, dryness is likely to limit tree growth.',
            location: {
                center: [76.188, 32.789],
                zoom: 13,
                pitch: 40,
                bearing: 0.00
            },
            /*mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',*/
            onChapterEnter: [
			{
					layer: 'mortality',
                     opacity: 0,
				},
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
					layer: 'heatMap',
					opacity: 0,
					//duration: 5000
				},
				{
					layer:'treeplantinghp',
					opacity:1
				},
				{
					layer: 'terrain',
                     opacity: 1,
				}
				 ],
            onChapterExit: [
				]
        },
		
{
    id: 'eighth-identifier',
    alignment: 'left',
    hidden: false,
    title: 'Planting trouble - Basaral',
    image: 'images/page 8_9 inset graph.jpg',//./path/to/image/source.png',
    description: '<p>In Himachal Pradesh, 67% of the land is under the forest department, but a vast chunk of these lands have overlapping uses and local communities have rights to access.</p><p>One-third of the afforestation budget( $1.64 million) was directed at Undemarcated Protected Forests, a forest tenure type. UPFs are not notified and their boundaries are not marked on the ground, leading to contested boundaries with private or village-owned lands.</p><p>Tree planting in contested areas can restrict access for pastoralists and forest dependent communities to resources including grazing, fodder, or fuelwood. It can lead to social conflicts and ultimately, plantations are less likely to survive.</p>',
    location: {
        center: [76.369, 31.708],
        zoom: 13.5,
        pitch: 40,
        bearing: 0,
        // flyTo additional controls-
        // These options control the flight curve, making it move
        // slowly and zoom out almost completely before starting
        // to pan.
        //speed: 2, // make the flying slow
        //curve: 1, // change the speed at which it zooms out
    },
    /*mapAnimation: 'flyTo',
    rotateAnimation: false,
    callback: '',*/
    onChapterEnter: [
	{
					layer: 'mortality',
                     opacity: 0,
				},
    {
             layer: 'heatMapCost',
             opacity: 0,
             //duration: 5000
         },
		 {
             layer: 'heatMap',
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
        },
		{
					layer: 'terrain',
                     opacity: 1,
				}
         ],
    onChapterExit: [

    ]
},

		        {
            id: 'fourth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Planting without people participation - Rey Kangra',
            image: 'images/page 8_9 inset graph.jpg',///path/to/image/source.png',
            description: '<p>As per several studies, lack of local community buy-in and involvement can be a key reason for failure of afforestation activities.</p><p>Only about 1% of tree planting funds ($0.06 million) went towards Cooperative Forest Societies - forests established by the government to ensure high participation of local communities in forest protection and management.</p><p>The analysis revealed that the trees species were also mostly commercial timber trees and not species that would benefit rural communities which led to low motivation to actively support and safeguard a plantation.</p>',
            location: {
                center: [75.871, 31.985],
                zoom: 13.5,
                pitch: 40,
                bearing: 0
            },
            /*mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',*/
            onChapterEnter: [
				{
					layer: 'mortality',
                     opacity: 0,
				},
                {
                    layer: 'rey-kangra',
                    opacity: 1,
                    //duration: 5000
                },
				{
					layer: 'heatMap',
					opacity: 0,
					//duration: 5000
				},
                 {
                    layer:'heatMapCost',
                    opacity:0
                },
               {
                   layer:'treeplantinghp',
                   opacity:1
               },
			   {
					layer: 'terrain',
                     opacity: 1,
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
