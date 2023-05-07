const cameras = [
  {
    id: '08e77bd0-c673-4303-b772-243fdee28d6c',
    name: 'BB-28A Manhattan Tower North',
    latitude: 40.707365,
    longitude: -73.998188,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/08e77bd0-c673-4303-b772-243fdee28d6c/image',
  },
  {
    id: '03a8a2da-3ac2-45aa-a5ba-4ff7d1ecbd22',
    name: '5 Ave @ 47 St',
    latitude: 40.756725,
    longitude: -73.97883,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/03a8a2da-3ac2-45aa-a5ba-4ff7d1ecbd22/image',
  },
  {
    id: '4c3de40f-6f13-491f-9253-1fc93cada807',
    name: 'Drumgoole Rd W @ Richmond Ave - quad - ptz - 0.162',
    latitude: 40.56327,
    longitude: -74.16978,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/4c3de40f-6f13-491f-9253-1fc93cada807/image',
  },
  {
    id: '09afb231-ef10-470f-bf54-0f44fc2dc18f',
    name: 'Pelham Shore Rd @ City Island Rd',
    latitude: 40.864552,
    longitude: -73.813781,
    area: 'Bronx',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/09afb231-ef10-470f-bf54-0f44fc2dc18f/image',
  },
  {
    id: '8ff9080c-6ba7-483b-be58-3a77c73546d8',
    name: 'Jackie Robinson Pkwy @ Metropolitan Ave',
    latitude: 40.709008,
    longitude: -73.841382,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/8ff9080c-6ba7-483b-be58-3a77c73546d8/image',
  },
  {
    id: '66533d67-7fe3-4250-b850-88c2fd7ec0e0',
    name: 'Father Capodanno Blvd @ Midland Ave',
    latitude: 40.570789,
    longitude: -74.090294,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/66533d67-7fe3-4250-b850-88c2fd7ec0e0/image',
  },
  {
    id: 'a2d92e4b-f041-4bd4-9f13-3ece7451a752',
    name: 'C3-SIE-05-WB_at_MLK-Int-Ex9',
    latitude: 40.612621,
    longitude: -74.153868,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/a2d92e4b-f041-4bd4-9f13-3ece7451a752/image',
  },
  {
    id: 'e229e0fd-559b-4c1e-bcba-ac23db1d01e3',
    name: '6 Ave @ 57 St',
    latitude: 40.7643348872061,
    longitude: -73.9772018595711,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/e229e0fd-559b-4c1e-bcba-ac23db1d01e3/image',
  },
  {
    id: '3576217a-82e8-4f2a-854f-3de97ef37362',
    name: 'BQE E/B @ Pearl St',
    latitude: 40.701273,
    longitude: -73.987712,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/3576217a-82e8-4f2a-854f-3de97ef37362/image',
  },
  {
    id: '04e09ed5-2d97-4e29-8438-b87748850dbb',
    name: 'Columbus Ave @ 65 St',
    latitude: 40.7721568767076,
    longitude: -73.9817190170288,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/04e09ed5-2d97-4e29-8438-b87748850dbb/image',
  },
  {
    id: '8246cf40-87f5-4f3a-b987-369e38a2d450',
    name: 'Staten Island Expy @ Forest Ave ',
    latitude: 40.6253,
    longitude: -74.1779,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/8246cf40-87f5-4f3a-b987-369e38a2d450/image',
  },
  {
    id: '7d06c900-a5e5-49ca-96b9-93a0662a2069',
    name: 'Belt Pkwy @ Verrazano Bridge',
    latitude: 40.606337,
    longitude: -74.031758,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/7d06c900-a5e5-49ca-96b9-93a0662a2069/image',
  },
  {
    id: '04ffc69c-92a7-4c02-aa18-2b16e7ba81f2',
    name: 'FDR Dr @ 36 St',
    latitude: 40.744441,
    longitude: -73.971242,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/04ffc69c-92a7-4c02-aa18-2b16e7ba81f2/image',
  },
  {
    id: 'e777e4b4-25cb-4c39-98fc-8d6b25cf7de7',
    name: 'Lexington Ave @ 53 St ',
    latitude: 40.758559,
    longitude: -73.971296,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/e777e4b4-25cb-4c39-98fc-8d6b25cf7de7/image',
  },
  {
    id: '67a7ce68-80ad-46d3-930c-7cf200109be7',
    name: 'Staten Island Expy @ Slosson Ave',
    latitude: 40.611387,
    longitude: -74.11665,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/67a7ce68-80ad-46d3-930c-7cf200109be7/image',
  },
  {
    id: 'ccd1abb9-0683-4d93-a62f-b2b121612d28',
    name: '9 Ave @ 42 St',
    latitude: 40.7584430039686,
    longitude: -73.9926394975013,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/ccd1abb9-0683-4d93-a62f-b2b121612d28/image',
  },
  {
    id: '0bbea8bd-10f1-4126-b3c5-9e9432eab749',
    name: 'Atlantic Ave @ Pennsylvania Ave',
    latitude: 40.675787,
    longitude: -73.896898,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/0bbea8bd-10f1-4126-b3c5-9e9432eab749/image',
  },
  {
    id: '9b57d5a0-d4fb-47ab-8df5-1d093228189e',
    name: 'West Shore Expy @ Bloomingdale Rd',
    latitude: 40.548922,
    longitude: -74.220292,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/9b57d5a0-d4fb-47ab-8df5-1d093228189e/image',
  },
  {
    id: '9aeb8a21-e4be-459a-ac9c-9ac282f0f929',
    name: '1 Avenue @ East 60 Street',
    latitude: 40.760204,
    longitude: -73.961502,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/9aeb8a21-e4be-459a-ac9c-9ac282f0f929/image',
  },
  {
    id: '07b8616e-373e-4ec9-89cc-11cad7d59fcb',
    name: 'Worth St @ Centre St',
    latitude: 40.715157,
    longitude: -74.00213,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/07b8616e-373e-4ec9-89cc-11cad7d59fcb/image',
  },
  {
    id: '05468f62-4092-4ff5-9bb6-0f70e56ff544',
    name: '2 Ave @ 49 St',
    latitude: 40.754259690691,
    longitude: -73.9689914123326,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/05468f62-4092-4ff5-9bb6-0f70e56ff544/image',
  },
  {
    id: '1546f761-039c-4b5c-af5e-75c83c9f603f',
    name: 'Lexington Ave @ 42 St',
    latitude: 40.7514494972593,
    longitude: -73.976060779701,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/1546f761-039c-4b5c-af5e-75c83c9f603f/image',
  },
  {
    id: '0f5e11ff-0ecc-4622-a32e-bb80a6b2c1c6',
    name: 'Hylan Blvd @ Arden Ave',
    latitude: 40.529434,
    longitude: -74.161351,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/0f5e11ff-0ecc-4622-a32e-bb80a6b2c1c6/image',
  },
  {
    id: 'eec11fee-fc83-41c1-a9e9-5926d3ce0459',
    name: 'Richmond Ave @ Draper Pl',
    latitude: 40.592668,
    longitude: -74.163322,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/eec11fee-fc83-41c1-a9e9-5926d3ce0459/image',
  },
  {
    id: '19789499-03ac-45de-9401-a7a71ea60d1e',
    name: '7 AVE @ 44 St',
    latitude: 40.75736,
    longitude: -73.986,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/19789499-03ac-45de-9401-a7a71ea60d1e/image',
  },
  {
    id: '4b82b783-725a-48d4-b107-36bc2c26a3db',
    name: 'Coney Island Ave (NB) @ Cortelyou Rd',
    latitude: 40.639307,
    longitude: -73.968691,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/4b82b783-725a-48d4-b107-36bc2c26a3db/image',
  },
  {
    id: '40213626-3ef8-4d63-be77-e1d84ca4d19c',
    name: 'Metropolitan Ave @ Berry St',
    latitude: 40.715924,
    longitude: -73.961926,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/40213626-3ef8-4d63-be77-e1d84ca4d19c/image',
  },
  {
    id: '17855127-7fe2-45d4-920c-ed14e80ec4d7',
    name: 'Third Ave Bridge',
    latitude: 40.807061,
    longitude: -73.933681,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/17855127-7fe2-45d4-920c-ed14e80ec4d7/image',
  },
  {
    id: '156b0613-239a-4e77-aa0e-0a4becfc0b05',
    name: 'Lenox Ave @ 125 St',
    latitude: 40.80798,
    longitude: -73.945472,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/156b0613-239a-4e77-aa0e-0a4becfc0b05/image',
  },
  {
    id: 'a454105b-8f59-4d96-a656-9a2d29f1353d',
    name: 'WBB-1 @ Bklyn Plaza',
    latitude: 40.7096293581722,
    longitude: -73.9597463607788,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/a454105b-8f59-4d96-a656-9a2d29f1353d/image',
  },
  {
    id: '155b2bff-5dd2-4109-bd10-e098376c8476',
    name: 'FDR Dr @ 96 Street',
    latitude: 40.7821012323438,
    longitude: -73.9436960220336,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/155b2bff-5dd2-4109-bd10-e098376c8476/image',
  },
  {
    id: '053e8995-f8cb-4d02-a659-70ac7c7da5db',
    name: 'Broadway @ 45 St',
    latitude: 40.757953,
    longitude: -73.98549,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/053e8995-f8cb-4d02-a659-70ac7c7da5db/image',
  },
  {
    id: '13064b49-6f97-43a2-9cf8-947767afaa12',
    name: 'C5-BQE-42-WB_at_30th_Ave-Ex43',
    latitude: 40.759356,
    longitude: -73.901707,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/13064b49-6f97-43a2-9cf8-947767afaa12/image',
  },
  {
    id: '8255d395-eadd-46c6-87ad-f6c9340753a7',
    name: 'Belt Pkwy @ Rockaway Parkway ',
    latitude: 40.630008,
    longitude: -73.886455,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/8255d395-eadd-46c6-87ad-f6c9340753a7/image',
  },
  {
    id: '2e70dd1f-b21f-4215-bc22-237a1d79eb71',
    name: 'C3-KWV-02-NB_at_Bloomngdale_Rd-Ex2',
    latitude: 40.52806,
    longitude: -74.216696,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/2e70dd1f-b21f-4215-bc22-237a1d79eb71/image',
  },
  {
    id: 'b4a86b05-cabc-42d7-a069-8b0119977111',
    name: 'Coney Island Ave (SB) @ Cortelyou Rd',
    latitude: 40.639073,
    longitude: -73.968846,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/b4a86b05-cabc-42d7-a069-8b0119977111/image',
  },
  {
    id: 'ba4a1b3a-6e33-4742-a471-18f204f488ef',
    name: 'Metropolitan Ave @ Union Ave',
    latitude: 40.714059,
    longitude: -73.951635,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/ba4a1b3a-6e33-4742-a471-18f204f488ef/image',
  },
  {
    id: '76faba94-f9e5-42d7-981e-0cbbbfd4bc21',
    name: 'Broadway @ 46 Street',
    latitude: 40.758711,
    longitude: -73.985366,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/76faba94-f9e5-42d7-981e-0cbbbfd4bc21/image',
  },
  {
    id: '4236a9da-63b4-4189-a344-83afcf5eac10',
    name: 'Grand Central Pkwy @ 45 Ave',
    latitude: 40.75011,
    longitude: -73.85094,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/4236a9da-63b4-4189-a344-83afcf5eac10/image',
  },
  {
    id: 'ae88c4d8-5638-4f90-bbdb-e15999936d31',
    name: 'Astoria Blvd @ 94 St',
    latitude: 40.762982,
    longitude: -73.875305,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/ae88c4d8-5638-4f90-bbdb-e15999936d31/image',
  },
  {
    id: '6d1bd95a-307b-4067-a31c-f28d48c578b1',
    name: 'Metropolitan Ave @ Grand St',
    latitude: 40.714251,
    longitude: -73.931525,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/6d1bd95a-307b-4067-a31c-f28d48c578b1/image',
  },
  {
    id: '0ff11926-fcf0-4e3b-8aea-ffc0ea4f2228',
    name: 'West Houston @ Hudson St',
    latitude: 40.728739,
    longitude: -74.007137,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/0ff11926-fcf0-4e3b-8aea-ffc0ea4f2228/image',
  },
  {
    id: '0ff541bf-1be1-4bbf-88c5-3a570541e7d2',
    name: 'Father Capodanno Blvd @ Sands LN',
    latitude: 40.590366,
    longitude: -74.066659,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/0ff541bf-1be1-4bbf-88c5-3a570541e7d2/image',
  },
  {
    id: 'd45fb588-de4c-4139-9e27-5b2d4c371b3d',
    name: 'York Ave @ 72 St',
    latitude: 40.76687,
    longitude: -73.9538,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/d45fb588-de4c-4139-9e27-5b2d4c371b3d/image',
  },
  {
    id: '07c5a9ab-38b0-4176-a932-395cded5858e',
    name: 'Cadman Plz West @ Tillary St',
    latitude: 40.696267,
    longitude: -73.991073,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/07c5a9ab-38b0-4176-a932-395cded5858e/image',
  },
  {
    id: '21fc45fc-30fb-4d6a-ae1b-7d2d2730dfca',
    name: 'Cross Bay Blvd @ 107 Ave',
    latitude: 40.678784,
    longitude: -73.844359,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/21fc45fc-30fb-4d6a-ae1b-7d2d2730dfca/image',
  },
  {
    id: '1f81dbf0-4360-49fd-b768-b1a09d730eb1',
    name: 'Gowanus Expy @ 7 Ave & 67 St',
    latitude: 40.633188,
    longitude: -74.016338,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/1f81dbf0-4360-49fd-b768-b1a09d730eb1/image',
  },
  {
    id: 'b7e5959c-1fc5-4fd2-a73e-426127b587b1',
    name: 'Park Ave @ 86 St',
    latitude: 40.780167,
    longitude: -73.957114,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/b7e5959c-1fc5-4fd2-a73e-426127b587b1/image',
  },
  {
    id: 'd8122408-7092-41ba-a9db-ef8847edeaef',
    name: 'Broadway @ 43 St',
    latitude: 40.756583,
    longitude: -73.986156,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/d8122408-7092-41ba-a9db-ef8847edeaef/image',
  },
  {
    id: '20503e73-1829-4275-a645-5be6a02fd7cd',
    name: 'Belt Pkwy @ 158 Ave',
    latitude: 40.659301,
    longitude: -73.854457,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/20503e73-1829-4275-a645-5be6a02fd7cd/image',
  },
  {
    id: '15ccea84-99db-4e7d-8ce4-2dc93c7d23a0',
    name: 'Cross Bay Blvd @ 6 Rd',
    latitude: 40.609628,
    longitude: -73.819118,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/15ccea84-99db-4e7d-8ce4-2dc93c7d23a0/image',
  },
  {
    id: '07f88e60-2b93-4bba-9784-8cac3c9b7f52',
    name: 'C3-SIE-02-EB_at_WSE_Int-Ex3',
    latitude: 40.622323,
    longitude: -74.174917,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/07f88e60-2b93-4bba-9784-8cac3c9b7f52/image',
  },
  {
    id: 'aacbd8a1-56b6-4757-b0b0-1bea396469c6',
    name: '11 Ave @ 34 ST',
    latitude: 40.755787,
    longitude: -74.00198,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/aacbd8a1-56b6-4757-b0b0-1bea396469c6/image',
  },
  {
    id: '3df06012-4c10-46e1-81d0-55405342e8df',
    name: '3 AVE @ 76 St',
    latitude: 40.77234,
    longitude: -73.9587,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/3df06012-4c10-46e1-81d0-55405342e8df/image',
  },
  {
    id: '2f28f8df-5eb5-4327-ab1f-7feaf2630b34',
    name: 'Grand Concourse @ Bedford Park Blvd',
    latitude: 40.872207,
    longitude: -73.887658,
    area: 'Bronx',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/2f28f8df-5eb5-4327-ab1f-7feaf2630b34/image',
  },
  {
    id: '3f04a686-f97c-4187-8968-cb09265e08ff',
    name: 'Central Park @ 72nd St Post 37',
    latitude: 40.770785,
    longitude: -73.978337,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/3f04a686-f97c-4187-8968-cb09265e08ff/image',
  },
  {
    id: '0bb2c096-0377-41f7-a451-56944aa8dae2',
    name: 'Belt Pkwy @ 122 St',
    latitude: 40.665007,
    longitude: -73.819358,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/0bb2c096-0377-41f7-a451-56944aa8dae2/image',
  },
  {
    id: '1b3248f9-f26e-4f36-943f-b7a7731595fb',
    name: 'QBB @ Crescent St',
    latitude: 40.7502805568614,
    longitude: -73.9401340484619,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/1b3248f9-f26e-4f36-943f-b7a7731595fb/image',
  },
  {
    id: 'af2b479e-ec78-46b0-be35-6bbbd1691460',
    name: '1 ave @ 40 st',
    latitude: 40.74759,
    longitude: -73.9708,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/af2b479e-ec78-46b0-be35-6bbbd1691460/image',
  },
  {
    id: '073df904-1699-4b0d-b779-d3a95305e4fd',
    name: 'C1-BRE-08-NB_at_Waterbury_Ave-Ex7B',
    latitude: 40.838087,
    longitude: -73.824953,
    area: 'Bronx',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/073df904-1699-4b0d-b779-d3a95305e4fd/image',
  },
  {
    id: '4ebe49c8-3e68-43f7-b415-da3db9f72693',
    name: '7 Ave @ 54 St',
    latitude: 40.763617,
    longitude: -73.981436,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/4ebe49c8-3e68-43f7-b415-da3db9f72693/image',
  },
  {
    id: '52ecb55e-c8aa-4784-85e1-fd7d38faf7e4',
    name: 'Exterior St @ E 138 St',
    latitude: 40.81369,
    longitude: -73.931416,
    area: 'Bronx',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/52ecb55e-c8aa-4784-85e1-fd7d38faf7e4/image',
  },
  {
    id: '2fe54994-17f6-499d-a3ab-8c6dc9dbda9e',
    name: 'Atlantic Ave @ Bedford Ave',
    latitude: 40.678742,
    longitude: -73.953032,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/2fe54994-17f6-499d-a3ab-8c6dc9dbda9e/image',
  },
  {
    id: '37d4da40-86d6-4185-bb0f-5b52b4a55c72',
    name: 'Grand Concourse @ East Kingsbridge',
    latitude: 40.86616,
    longitude: -73.894213,
    area: 'Bronx',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/37d4da40-86d6-4185-bb0f-5b52b4a55c72/image',
  },
  {
    id: '52f3d48e-3bb4-4c83-bec2-1fb664d56501',
    name: 'Qns Blvd @ QnCnt Mall',
    latitude: 40.7335677903411,
    longitude: -73.8693237304687,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/52f3d48e-3bb4-4c83-bec2-1fb664d56501/image',
  },
  {
    id: '2f504422-66f8-4ddc-805f-8744279a1a6e',
    name: 'Northern Blvd @ 68 St',
    latitude: 40.7536616174888,
    longitude: -73.8985919952392,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/2f504422-66f8-4ddc-805f-8744279a1a6e/image',
  },
  {
    id: '37bb364c-7288-4481-a17d-0ba244d30baa',
    name: 'Rockaway Blvd @ Baisley Blvd',
    latitude: 40.672635,
    longitude: -73.785637,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/37bb364c-7288-4481-a17d-0ba244d30baa/image',
  },
  {
    id: '53d62ac5-34f9-4d8f-82b9-0cecebc9c55a',
    name: '4 Ave @ Union St - 66.130',
    latitude: 40.677393,
    longitude: -73.982988,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/53d62ac5-34f9-4d8f-82b9-0cecebc9c55a/image',
  },
  {
    id: '1572a83a-0a4f-4a7b-84a0-fec0890a2de3',
    name: 'C4-WST-03-Med_at_Vestry_St',
    latitude: 40.723031,
    longitude: -74.01141,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/1572a83a-0a4f-4a7b-84a0-fec0890a2de3/image',
  },
  {
    id: '39b42007-16d8-4302-8b8c-602bbb9e9683',
    name: 'Northern Blvd @ 114 St',
    latitude: 40.758271,
    longitude: -73.855567,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/39b42007-16d8-4302-8b8c-602bbb9e9683/image',
  },
  {
    id: '35457f2c-c510-4f3c-ba0d-f88853c3697c',
    name: 'Central Park West @ 81 St',
    latitude: 40.782031,
    longitude: -73.971734,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/35457f2c-c510-4f3c-ba0d-f88853c3697c/image',
  },
  {
    id: 'd47d2f63-cdc1-4f28-bc4c-e64ac07e4f1d',
    name: 'Union Sq @ 14 St',
    latitude: 40.735226,
    longitude: -73.990946,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/d47d2f63-cdc1-4f28-bc4c-e64ac07e4f1d/image',
  },
  {
    id: 'fec1c88c-46b6-41bb-89ab-7dc7eeb2daaf',
    name: 'College Point Blvd @ Roosevelt Ave',
    latitude: 40.758092,
    longitude: -73.834234,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/fec1c88c-46b6-41bb-89ab-7dc7eeb2daaf/image',
  },
  {
    id: '33ea5ed1-0d62-4f44-9fda-fda5c2327eed',
    name: 'Main St @ Sanford Ave',
    latitude: 40.756669,
    longitude: -73.828794,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/33ea5ed1-0d62-4f44-9fda-fda5c2327eed/image',
  },
  {
    id: '2be7f4d2-3a72-45ba-95ad-b526643ef248',
    name: 'West Street @ Intrepid',
    latitude: 40.763103,
    longitude: -73.999643,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/2be7f4d2-3a72-45ba-95ad-b526643ef248/image',
  },
  {
    id: '42446823-2f5a-4db0-a99e-3766d0822485',
    name: 'Bronx River Pkwy @ E Gun Hill RD',
    latitude: 40.8783,
    longitude: -73.87004,
    area: 'Bronx',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/42446823-2f5a-4db0-a99e-3766d0822485/image',
  },
  {
    id: '279720e5-7db3-4143-9608-531cfc50dc25',
    name: 'College Point Blvd @ 35 Ave',
    latitude: 40.763583,
    longitude: -73.836038,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/279720e5-7db3-4143-9608-531cfc50dc25/image',
  },
  {
    id: 'fbaafcae-6f48-46ab-b6c7-b8919bcd5986',
    name: 'Flatbush Ave @ Kings Hwy',
    latitude: 40.622374,
    longitude: -73.936664,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/fbaafcae-6f48-46ab-b6c7-b8919bcd5986/image',
  },
  {
    id: 'c941aa1a-ebde-4589-9669-eaf67279dfab',
    name: 'Drumgoole Rd W @ Arden Ave - quad - ptz - 141.10',
    latitude: 40.54696,
    longitude: -74.18117,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/c941aa1a-ebde-4589-9669-eaf67279dfab/image',
  },
  {
    id: '5c505897-b475-4359-897d-b064bdb9feef',
    name: '8 AVE @ 44 St',
    latitude: 40.75851,
    longitude: -73.9888,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/5c505897-b475-4359-897d-b064bdb9feef/image',
  },
  {
    id: '09b1235e-d2d1-4451-83a5-5a1c3ec280aa',
    name: 'St Nicholas Ave @ 145 St',
    latitude: 40.824429,
    longitude: -73.944747,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/09b1235e-d2d1-4451-83a5-5a1c3ec280aa/image',
  },
  {
    id: 'd78ebdc6-2211-479e-bda6-59d79db20258',
    name: '8 Ave @ 57 St',
    latitude: 40.766796,
    longitude: -73.9829,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/d78ebdc6-2211-479e-bda6-59d79db20258/image',
  },
  {
    id: 'd83aed40-b117-424b-8caf-35c3afe82527',
    name: 'East 60th St @ Queensboro Bridge Exit ',
    latitude: 40.760695,
    longitude: -73.963158,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/d83aed40-b117-424b-8caf-35c3afe82527/image',
  },
  {
    id: '575d8f33-7923-4ec6-983e-82c58efd8110',
    name: 'Cross Bronx Expy @ Arthur Ave',
    latitude: 40.843732,
    longitude: -73.894798,
    area: 'Bronx',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/575d8f33-7923-4ec6-983e-82c58efd8110/image',
  },
  {
    id: '426d2789-3f58-4c5b-9db6-1647db7c4b5a',
    name: 'Belt Pkwy @ Erskine',
    latitude: 40.6509177712612,
    longitude: -73.8657617568969,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/426d2789-3f58-4c5b-9db6-1647db7c4b5a/image',
  },
  {
    id: '260fc63c-773a-45e3-a04b-9f05c3184a44',
    name: 'Belt Pkwy @ Bay 8th St',
    latitude: 40.6043925500801,
    longitude: -74.0169858619018,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/260fc63c-773a-45e3-a04b-9f05c3184a44/image',
  },
  {
    id: '21dd2187-79ff-4cf9-bc11-055a04cdfb3f',
    name: 'C5-LIE-08-EB_48th_St_LL-Ex16',
    latitude: 40.731963,
    longitude: -73.919235,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/21dd2187-79ff-4cf9-bc11-055a04cdfb3f/image',
  },
  {
    id: '433c7f12-86e0-41ea-bb29-781bef1b2444',
    name: 'C2-BQE-30-EB_at_Stewrt_Ave_Kosc-Br',
    latitude: 40.724979,
    longitude: -73.934058,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/433c7f12-86e0-41ea-bb29-781bef1b2444/image',
  },
  {
    id: '5933e055-d8a8-4248-a125-fc2ce861b1bc',
    name: 'Cross Island Pkwy @ 100 Ave',
    latitude: 40.715694,
    longitude: -73.729213,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/5933e055-d8a8-4248-a125-fc2ce861b1bc/image',
  },
  {
    id: '434094f8-1be4-4c19-8067-1e11049e46b4',
    name: 'Madison Ave @ 46 St - Manhattan',
    latitude: 40.755508,
    longitude: -73.977437,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/434094f8-1be4-4c19-8067-1e11049e46b4/image',
  },
  {
    id: '9b607ed0-dcb4-4cc3-8055-bbb23e5fe9d6',
    name: 'C2-GE-13-EB_at_Prospect_Expy-Ex24',
    latitude: 40.666733,
    longitude: -73.995508,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/9b607ed0-dcb4-4cc3-8055-bbb23e5fe9d6/image',
  },
  {
    id: '4602d793-d397-40c8-9748-de0d3dcddcfb',
    name: 'QBB LL CM @ W Channel',
    latitude: 40.757784,
    longitude: -73.956813,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/4602d793-d397-40c8-9748-de0d3dcddcfb/image',
  },
  {
    id: '43a4279e-de3a-4ab3-8c86-b268eb5e8848',
    name: 'Flatbush Ave @ Fillmore Ave',
    latitude: 40.614704,
    longitude: -73.928063,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/43a4279e-de3a-4ab3-8c86-b268eb5e8848/image',
  },
  {
    id: '48a0813b-60b4-4dd2-953f-a40731ae1fba',
    name: 'Jackie Robinson Pkwy @ Jamaica Ave',
    latitude: 40.678191,
    longitude: -73.897749,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/48a0813b-60b4-4dd2-953f-a40731ae1fba/image',
  },
  {
    id: '99bd1846-c0e4-4689-b077-63d2525bf1aa',
    name: 'Amsterdam Ave @ W 180 st ',
    latitude: 40.84652,
    longitude: -73.932073,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/99bd1846-c0e4-4689-b077-63d2525bf1aa/image',
  },
  {
    id: '6ab24015-2446-4410-b7a4-d8dd13ed2f8b',
    name: 'LIE @ College Point Blvd',
    latitude: 40.744001,
    longitude: -73.837011,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/6ab24015-2446-4410-b7a4-d8dd13ed2f8b/image',
  },
  {
    id: '1947a3e4-0279-4804-8e18-1ae3d5e13aca',
    name: 'C5-BQE-31A_W_at_56th Rd',
    latitude: 40.72909457,
    longitude: -73.92731605,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/1947a3e4-0279-4804-8e18-1ae3d5e13aca/image',
  },
  {
    id: '513234e1-ea04-47bc-b607-c6ff1bb6a18d',
    name: 'C5-LIE-29-WB_at_220th_St-Ex29',
    latitude: 40.74907941,
    longitude: -73.75828283,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/513234e1-ea04-47bc-b607-c6ff1bb6a18d/image',
  },
  {
    id: '53de1e7c-8443-47fa-8603-4e5ef0466c17',
    name: 'Queens Blvd @ Sunnyside Br',
    latitude: 40.747615,
    longitude: -73.936121,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/53de1e7c-8443-47fa-8603-4e5ef0466c17/image',
  },
  {
    id: '6d5e4eee-f777-4623-9206-92495b39bae5',
    name: 'C2-GE-07-WB_at_63rd_St',
    latitude: 40.64076309,
    longitude: -74.02182521,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/6d5e4eee-f777-4623-9206-92495b39bae5/image',
  },
  {
    id: '29aaea67-bf67-4d6f-b572-f810f48f5b48',
    name: 'Drumgoogle Rd E @ Vernon Ave',
    latitude: 40.531918,
    longitude: -74.199575,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/29aaea67-bf67-4d6f-b572-f810f48f5b48/image',
  },
  {
    id: '5214cfe8-ccfc-42e9-8e2a-ff2865c1a518',
    name: 'Houston St @ Broadway',
    latitude: 40.725458,
    longitude: -73.996756,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/5214cfe8-ccfc-42e9-8e2a-ff2865c1a518/image',
  },
  {
    id: '57f16ffc-241a-4603-b502-7a937c246707',
    name: 'Queens Blvd @ 48 St',
    latitude: 40.743075,
    longitude: -73.916846,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/57f16ffc-241a-4603-b502-7a937c246707/image',
  },
  {
    id: '5507fab3-3430-4747-a9ab-ed9f7b5ba959',
    name: 'Queens Blvd @ Jackson Ave',
    latitude: 40.7489478,
    longitude: -73.9373769,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/5507fab3-3430-4747-a9ab-ed9f7b5ba959/image',
  },
  {
    id: '547cd268-58f9-4a84-a235-dbaa0432d79a',
    name: 'South Street @ Pike Street',
    latitude: 40.709853,
    longitude: -73.991746,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/547cd268-58f9-4a84-a235-dbaa0432d79a/image',
  },
  {
    id: '5e621a58-dade-4b9a-aef8-24b3038455a4',
    name: 'Long Island Expy @ Greenpoint Ave',
    latitude: 40.737146,
    longitude: -73.930969,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/5e621a58-dade-4b9a-aef8-24b3038455a4/image',
  },
  {
    id: '5f91d1f5-bc11-44dd-a6a5-a36435ed680c',
    name: 'Long Island Expy @ East Hampton Blvd',
    latitude: 40.752129,
    longitude: -73.74689,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/5f91d1f5-bc11-44dd-a6a5-a36435ed680c/image',
  },
  {
    id: '2b4ed602-312d-4f31-a531-153ac33b4d87',
    name: 'Gowanus Expy @ 49 St',
    latitude: 40.648255,
    longitude: -74.013992,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/2b4ed602-312d-4f31-a531-153ac33b4d87/image',
  },
  {
    id: 'c4fa59c7-32b9-410e-b0f1-c10ce13e37ac',
    name: 'C2-GE-11_E_EB_at_37th_St_Ex23',
    latitude: 40.655767,
    longitude: -74.006388,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/c4fa59c7-32b9-410e-b0f1-c10ce13e37ac/image',
  },
  {
    id: '60793334-580b-4538-b947-7312e95039bf',
    name: 'Astoria Blvd S S/R @ 33 St',
    latitude: 40.769839,
    longitude: -73.916794,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/60793334-580b-4538-b947-7312e95039bf/image',
  },
  {
    id: '5674d0ea-703a-43c3-bea7-2b372d1eb00b',
    name: '2 Ave @ 72 St',
    latitude: 40.767996704675,
    longitude: -73.9582872390747,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/5674d0ea-703a-43c3-bea7-2b372d1eb00b/image',
  },
  {
    id: '1d839733-c963-44bc-9da4-f02ba20ca307',
    name: 'Woodhaven Blvd @ Rockaway Blvd',
    latitude: 40.681271,
    longitude: -73.844625,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/1d839733-c963-44bc-9da4-f02ba20ca307/image',
  },
  {
    id: '1817f0b6-148f-4105-a5d6-2a53079aad39',
    name: 'C5-CVE-01-SB_at_Union_Turnpike',
    latitude: 40.732235,
    longitude: -73.765665,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/1817f0b6-148f-4105-a5d6-2a53079aad39/image',
  },
  {
    id: 'c79840eb-e25e-41cc-8a54-f8eaa6e29463',
    name: 'C2-BQE-25-WB_at_S.5th_St-Ex32',
    latitude: 40.709063,
    longitude: -73.957028,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/c79840eb-e25e-41cc-8a54-f8eaa6e29463/image',
  },
  {
    id: '08328372-55a2-448a-b180-9b4bce0b8d9e',
    name: 'Broadway @ Morris St',
    latitude: 40.70589,
    longitude: -74.0133,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/08328372-55a2-448a-b180-9b4bce0b8d9e/image',
  },
  {
    id: '154a987b-7f71-4c09-a932-f256d085a34a',
    name: 'GCP @ 214 St',
    latitude: 40.7269335438612,
    longitude: -73.7537097930908,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/154a987b-7f71-4c09-a932-f256d085a34a/image',
  },
  {
    id: '60982889-171e-4208-ae1d-8f179f91231e',
    name: 'Queens Blvd E/B @ 43 St',
    latitude: 40.743316,
    longitude: -73.921505,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/60982889-171e-4208-ae1d-8f179f91231e/image',
  },
  {
    id: '699cc803-c1db-4307-becf-9604a45c7c5c',
    name: 'McGuinness Blvd @ Bayard St',
    latitude: 40.720839,
    longitude: -73.944951,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/699cc803-c1db-4307-becf-9604a45c7c5c/image',
  },
  {
    id: '63e79f0b-7dea-4c8e-864c-f3315f9cc62c',
    name: 'Grand St @ Broadway',
    latitude: 40.7208548134741,
    longitude: -74.0006551782388,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/63e79f0b-7dea-4c8e-864c-f3315f9cc62c/image',
  },
  {
    id: '243e945a-b872-4bac-9898-94ce8963ef44',
    name: 'Flatbush Ave @ DeKalb Ave',
    latitude: 40.689993,
    longitude: -73.98163,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/243e945a-b872-4bac-9898-94ce8963ef44/image',
  },
  {
    id: 'ce81bdbd-967b-4ad0-ab40-c4628bb59560',
    name: 'Park Ave @ 106 St',
    latitude: 40.79294,
    longitude: -73.9479,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/ce81bdbd-967b-4ad0-ab40-c4628bb59560/image',
  },
  {
    id: '2e43a9d0-1df8-4a38-ae20-2e0f359bb55d',
    name: 'Flatbush Ave @ Empire Blvd',
    latitude: 40.663093,
    longitude: -73.96236,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/2e43a9d0-1df8-4a38-ae20-2e0f359bb55d/image',
  },
  {
    id: '6ac8b6d3-62c8-4077-a0a6-f66d922376eb',
    name: 'Grand St @ Bushwick Ave',
    latitude: 40.712024,
    longitude: -73.940835,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/6ac8b6d3-62c8-4077-a0a6-f66d922376eb/image',
  },
  {
    id: '4f806706-c888-4926-932c-f9f3f0255b60',
    name: 'New Eng Thru @ Bartow',
    latitude: 40.868476,
    longitude: -73.832667,
    area: 'Bronx',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/4f806706-c888-4926-932c-f9f3f0255b60/image',
  },
  {
    id: '353368c2-7307-4923-a86b-5d7e6e0d0e6a',
    name: 'C3-SIE-04-WB_at_Lambert_St_Ex6',
    latitude: 40.618041,
    longitude: -74.161434,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/353368c2-7307-4923-a86b-5d7e6e0d0e6a/image',
  },
  {
    id: 'c8b15922-4262-459a-85d5-17442ec9c54f',
    name: 'C1-MDE-09-SB_at_Depot_Pl-Ex7-CBX',
    latitude: 40.84154,
    longitude: -73.928612,
    area: 'Bronx',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/c8b15922-4262-459a-85d5-17442ec9c54f/image',
  },
  {
    id: '4334f995-5cae-4725-b7d2-ccaf72447237',
    name: 'Washington St @ Prospect St',
    latitude: 40.700743,
    longitude: -73.989736,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/4334f995-5cae-4725-b7d2-ccaf72447237/image',
  },
  {
    id: '40ffec9e-3d55-454f-927e-6a602869a451',
    name: 'Northern Blvd @ Parsons Blvd',
    latitude: 40.764641,
    longitude: -73.82347,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/40ffec9e-3d55-454f-927e-6a602869a451/image',
  },
  {
    id: '6728d273-d20b-44b7-868a-d54c00e50fab',
    name: 'Amsterdam @ 178 St',
    latitude: 40.846142,
    longitude: -73.932426,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/6728d273-d20b-44b7-868a-d54c00e50fab/image',
  },
  {
    id: '65440c6b-ee6c-4406-8542-2992b6edf3f5',
    name: 'Lexington Ave @ 72 St',
    latitude: 40.769719307503,
    longitude: -73.9620208740234,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/65440c6b-ee6c-4406-8542-2992b6edf3f5/image',
  },
  {
    id: '69f0dd32-68a0-4934-886d-23202fa14d63',
    name: 'East Houston St @ Ave D',
    latitude: 40.719876,
    longitude: -73.978731,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/69f0dd32-68a0-4934-886d-23202fa14d63/image',
  },
  {
    id: '9b648eba-3e4a-4c2c-9afc-e659c1083804',
    name: 'MHB-19 Manh N URDW @ Anch',
    latitude: 40.710705,
    longitude: -73.992304,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/9b648eba-3e4a-4c2c-9afc-e659c1083804/image',
  },
  {
    id: '6c4cf1a1-0a5c-4d32-b502-e4f28fe609fd',
    name: 'South St @ Broad St',
    latitude: 40.701797,
    longitude: -74.011144,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/6c4cf1a1-0a5c-4d32-b502-e4f28fe609fd/image',
  },
  {
    id: '6316453d-6161-4b98-a8e7-0e36c69d267c',
    name: '2 Ave @ 74 St',
    latitude: 40.770142,
    longitude: -73.957381,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/6316453d-6161-4b98-a8e7-0e36c69d267c/image',
  },
  {
    id: '63930c04-926c-4730-821e-95b486513843',
    name: 'RT. 9A @ N. Moore St',
    latitude: 40.720319,
    longitude: -74.012171,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/63930c04-926c-4730-821e-95b486513843/image',
  },
  {
    id: '4850e464-1111-4b5d-a72d-f54a0e12a789',
    name: '8 Ave @ 49 St',
    latitude: 40.7616760477179,
    longitude: -73.9865807566069,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/4850e464-1111-4b5d-a72d-f54a0e12a789/image',
  },
  {
    id: '01ffcaef-7c54-4f16-8668-bce6efbcfcb1',
    name: 'Hylan Ave @ Page Ave',
    latitude: 40.507726,
    longitude: -74.230003,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/01ffcaef-7c54-4f16-8668-bce6efbcfcb1/image',
  },
  {
    id: '0360205b-183b-4dd3-a01f-e7f0deb5ff1f',
    name: 'Shore Front Pkwy @ Beach 108 St',
    latitude: 40.580181,
    longitude: -73.828916,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/0360205b-183b-4dd3-a01f-e7f0deb5ff1f/image',
  },
  {
    id: '70c286f0-78bc-43e4-9284-63ea2843c769',
    name: 'Father Capodanno Blvd @ Ocean Ave',
    latitude: 40.595264,
    longitude: -74.062772,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/70c286f0-78bc-43e4-9284-63ea2843c769/image',
  },
  {
    id: '76ce9adc-f73d-46b7-9ca7-fe6d7521b603',
    name: 'Queens Plaza North @ 2811 (Westside)',
    latitude: 40.7493702419327,
    longitude: -73.9386320114135,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/76ce9adc-f73d-46b7-9ca7-fe6d7521b603/image',
  },
  {
    id: '7dbe41f8-0ec7-416c-9281-65bbff3a8d76',
    name: 'Rockaway Blvd @ Guy Brewer Blvd',
    latitude: 40.656274,
    longitude: -73.767364,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/7dbe41f8-0ec7-416c-9281-65bbff3a8d76/image',
  },
  {
    id: '09cc9eed-0732-4199-a6ca-b3d0bbbad860',
    name: 'C1-MDE-06-NB_at_Macombs_Dam_Br-Ex5',
    latitude: 40.828221,
    longitude: -73.930969,
    area: 'Bronx',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/09cc9eed-0732-4199-a6ca-b3d0bbbad860/image',
  },
  {
    id: '7b84a612-a340-49ae-b3e8-1c558049cb3c',
    name: 'Sands St @ BQE Ent',
    latitude: 40.699916,
    longitude: -73.98621,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/7b84a612-a340-49ae-b3e8-1c558049cb3c/image',
  },
  {
    id: '8e07d72b-94cd-44c4-b92a-48decda031d2',
    name: 'Queens Blvd @ 39 St - East',
    latitude: 40.74383,
    longitude: -73.926217,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/8e07d72b-94cd-44c4-b92a-48decda031d2/image',
  },
  {
    id: '54e7c710-bdef-411d-801a-806060a418f6',
    name: 'Father Capodanno Blvd @ 2000 FT N of Seaview Ave',
    latitude: 40.583287,
    longitude: -74.073717,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/54e7c710-bdef-411d-801a-806060a418f6/image',
  },
  {
    id: '6bf2a18c-275b-4ec5-9242-00fee9d1a467',
    name: 'West Shore Expy @ Victory Blvd',
    latitude: 40.590118,
    longitude: -74.193442,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/6bf2a18c-275b-4ec5-9242-00fee9d1a467/image',
  },
  {
    id: '2aed4b42-b46e-4f27-9cf9-d1d72ee5f036',
    name: 'C3-WSE-08-SB_at_Victory_Blvd-Ex7',
    latitude: 40.589805,
    longitude: -74.193632,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/2aed4b42-b46e-4f27-9cf9-d1d72ee5f036/image',
  },
  {
    id: '7384e16f-2921-4b14-b5a8-15cf58ef7ef0',
    name: 'C5-BQE-31-EB_at_54th_Ave',
    latitude: 40.732548,
    longitude: -73.924803,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/7384e16f-2921-4b14-b5a8-15cf58ef7ef0/image',
  },
  {
    id: '7740c40a-5250-4692-9a1a-c4326dc7d508',
    name: 'Astoria Blvd @ 82 St',
    latitude: 40.765038,
    longitude: -73.887086,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/7740c40a-5250-4692-9a1a-c4326dc7d508/image',
  },
  {
    id: '7980448b-0d57-49ad-8b87-50174e5d3065',
    name: 'Richmond Ave @ Arthur Kill Rd - quad - ptz - 141.131',
    latitude: 40.56106,
    longitude: -74.17012,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/7980448b-0d57-49ad-8b87-50174e5d3065/image',
  },
  {
    id: '300e0508-3c7e-4ac5-8527-b75bcf8292b8',
    name: 'Hillside Ave @ Little Neck Pkwy',
    latitude: 40.736207,
    longitude: -73.713777,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/300e0508-3c7e-4ac5-8527-b75bcf8292b8/image',
  },
  {
    id: '6c2996f1-3d8f-44a9-8ce0-a827ae8d3680',
    name: 'FDR @ 145 St',
    latitude: 40.81961,
    longitude: -73.9342,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/6c2996f1-3d8f-44a9-8ce0-a827ae8d3680/image',
  },
  {
    id: '5a9ebe48-fb36-4de7-8666-f50de83c7941',
    name: 'Flatbush Ave @ Nostrand Ave',
    latitude: 40.632889,
    longitude: -73.947672,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/5a9ebe48-fb36-4de7-8666-f50de83c7941/image',
  },
  {
    id: '06ea08ec-5cd8-4bd6-9535-502acf651abc',
    name: '5 Ave @ 86 St',
    latitude: 40.781556,
    longitude: -73.960389,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/06ea08ec-5cd8-4bd6-9535-502acf651abc/image',
  },
  {
    id: '7f89db99-3420-4f7b-9f2a-edfc9014e8c1',
    name: 'Manhattan BBT Entrance',
    latitude: 40.706251,
    longitude: -74.014347,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/7f89db99-3420-4f7b-9f2a-edfc9014e8c1/image',
  },
  {
    id: '195870e2-8714-45c6-86ba-8ae079ef738c',
    name: 'McGuinness Blvd @ Green St',
    latitude: 40.734007,
    longitude: -73.952283,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/195870e2-8714-45c6-86ba-8ae079ef738c/image',
  },
  {
    id: '80976618-bbf8-4e7a-8a9d-095f3594244c',
    name: 'Hylan Blvd @ Bay St',
    latitude: 40.61405,
    longitude: -74.066176,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/80976618-bbf8-4e7a-8a9d-095f3594244c/image',
  },
  {
    id: '053afe02-e1b3-4bea-9995-787e72c7fff4',
    name: 'Atlantic Ave @ Barclays Center',
    latitude: 40.683572,
    longitude: -73.976083,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/053afe02-e1b3-4bea-9995-787e72c7fff4/image',
  },
  {
    id: '874223a4-dc80-4764-8d91-1590cd3737d4',
    name: 'FDR Dr @ 90 St',
    latitude: 40.777422,
    longitude: -73.942713,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/874223a4-dc80-4764-8d91-1590cd3737d4/image',
  },
  {
    id: '2d1ed99a-c3d3-4616-a0d6-a9fe16f3e48c',
    name: 'SIE @ Clove Rd',
    latitude: 40.610941,
    longitude: -74.098029,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/2d1ed99a-c3d3-4616-a0d6-a9fe16f3e48c/image',
  },
  {
    id: 'ace1e872-d96d-4cca-8639-6750287e65e8',
    name: 'Van Dam St @ Review Ave @ Greenpoint Ave Br',
    latitude: 40.734346,
    longitude: -73.937978,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/ace1e872-d96d-4cca-8639-6750287e65e8/image',
  },
  {
    id: '08c40d18-cacf-4139-aa64-ba8f8602af53',
    name: 'Northern Blvd @ 82 St',
    latitude: 40.755492,
    longitude: -73.885347,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/08c40d18-cacf-4139-aa64-ba8f8602af53/image',
  },
  {
    id: '60fbce69-38fa-42b2-9ae8-41aea66abddf',
    name: 'Sands St @ Brooklyn Bridge Ent',
    latitude: 40.699961,
    longitude: -73.986828,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/60fbce69-38fa-42b2-9ae8-41aea66abddf/image',
  },
  {
    id: '9010e3c3-c888-43d4-9c26-59e9b802dbcb',
    name: 'Old Fulton St @ Furman St',
    latitude: 40.702956,
    longitude: -73.994687,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/9010e3c3-c888-43d4-9c26-59e9b802dbcb/image',
  },
  {
    id: '138a0bcb-15af-46a4-baf0-8724016c73fa',
    name: 'GCP @ Astoria Blvd @ 49 St',
    latitude: 40.7670031362413,
    longitude: -73.9011914460327,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/138a0bcb-15af-46a4-baf0-8724016c73fa/image',
  },
  {
    id: '5ea363ef-b9d6-4863-967a-0b4ba9cb0bf5',
    name: 'Flatbush Ave @ Aviator Sports & Golf Club',
    latitude: 40.5902,
    longitude: -73.900803,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/5ea363ef-b9d6-4863-967a-0b4ba9cb0bf5/image',
  },
  {
    id: 'bca4a4b0-d73f-4937-9301-85ff8293bd94',
    name: '7 AVE @ 42 St',
    latitude: 40.75609,
    longitude: -73.9869,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/bca4a4b0-d73f-4937-9301-85ff8293bd94/image',
  },
  {
    id: '1dc7794b-62bb-4cb7-93ee-df87e5ac671d',
    name: 'Clearview Expy @ 50 Ave',
    latitude: 40.751323,
    longitude: -73.775287,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/1dc7794b-62bb-4cb7-93ee-df87e5ac671d/image',
  },
  {
    id: 'a65f8b8a-c0ba-4138-81a5-783ba837490d',
    name: 'Major Deegan Expwy @ 225 St',
    latitude: 40.8732637,
    longitude: -73.9058863,
    area: 'Bronx',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/a65f8b8a-c0ba-4138-81a5-783ba837490d/image',
  },
  {
    id: '822f0cb4-827d-41cd-8f35-2b328a8c1d24',
    name: 'Northern Blvd @ 108 St',
    latitude: 40.757824,
    longitude: -73.861028,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/822f0cb4-827d-41cd-8f35-2b328a8c1d24/image',
  },
  {
    id: '45b87983-6659-4be7-a354-15d756664204',
    name: 'Wythe Ave @ Williamsburg st E',
    latitude: 40.701095,
    longitude: -73.96085,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/45b87983-6659-4be7-a354-15d756664204/image',
  },
  {
    id: '2a0021de-869a-4a31-b151-0be7f78d9c05',
    name: 'MHB-17 Manh LRW @ X OVER',
    latitude: 40.712361,
    longitude: -73.993504,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/2a0021de-869a-4a31-b151-0be7f78d9c05/image',
  },
  {
    id: '1e88b34b-2058-402e-9a3d-aca1c57696bf',
    name: 'GCP @ 31 ST',
    latitude: 40.7701093245849,
    longitude: -73.9171314239502,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/1e88b34b-2058-402e-9a3d-aca1c57696bf/image',
  },
  {
    id: '83d034f2-584b-4dab-9e3d-d70a59995dc5',
    name: 'Grand Concourse @ Moshulu Pkwy ',
    latitude: 40.87857,
    longitude: -73.884785,
    area: 'Bronx',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/83d034f2-584b-4dab-9e3d-d70a59995dc5/image',
  },
  {
    id: '975c7dd6-d6d7-4eaa-843d-fbe8eb7a1eb3',
    name: 'QBB UL CM @ York Ave',
    latitude: 40.7590599112718,
    longitude: -73.9594663180461,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/975c7dd6-d6d7-4eaa-843d-fbe8eb7a1eb3/image',
  },
  {
    id: '9565e94d-66f2-4965-9c13-82d5500d6cfd',
    name: 'Broadway @ 42 St',
    latitude: 40.7558094297322,
    longitude: -73.9864124090652,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/9565e94d-66f2-4965-9c13-82d5500d6cfd/image',
  },
  {
    id: '90f5542f-c3cf-4df2-a9b0-27a85606d659',
    name: 'Flatbush Ave@ 6 Ave',
    latitude: 40.6793036647623,
    longitude: -73.974552154541,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/90f5542f-c3cf-4df2-a9b0-27a85606d659/image',
  },
  {
    id: 'd1c219c0-afdd-4fa4-a72c-cc1b1318b99d',
    name: '9 Ave @ 23 St',
    latitude: 40.7465085991952,
    longitude: -74.001366842392,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/d1c219c0-afdd-4fa4-a72c-cc1b1318b99d/image',
  },
  {
    id: '98b37dd5-bd64-4ace-add0-37f5135df600',
    name: 'St Nicholas Ave @ 125 St',
    latitude: 40.810107,
    longitude: -73.952585,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/98b37dd5-bd64-4ace-add0-37f5135df600/image',
  },
  {
    id: '8ed1baa8-48ab-4ec7-9110-7b89162ce8c3',
    name: 'Hylan Blvd @ West Fingerboard Rd & Sand Ln',
    latitude: 40.598942,
    longitude: -74.072231,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/8ed1baa8-48ab-4ec7-9110-7b89162ce8c3/image',
  },
  {
    id: '9955d671-39ad-4fb7-b63e-4e78cf6ac157',
    name: 'Flatbush Ave and 4 Ave',
    latitude: 40.6838924508798,
    longitude: -73.9779424667358,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/9955d671-39ad-4fb7-b63e-4e78cf6ac157/image',
  },
  {
    id: '91c033b3-ecfd-4fb9-b27d-d256eb720789',
    name: 'Prospect Pkwy @ 3 Ave',
    latitude: 40.666593,
    longitude: -73.994958,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/91c033b3-ecfd-4fb9-b27d-d256eb720789/image',
  },
  {
    id: '936e562d-df76-4120-b2b6-112bc450aa94',
    name: 'Belt Pkwy @ Pennsylvania Ave',
    latitude: 40.642516876713,
    longitude: -73.8758897781372,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/936e562d-df76-4120-b2b6-112bc450aa94/image',
  },
  {
    id: '34af619f-c745-4f09-a81c-e3635dd764c6',
    name: 'Richmond Ave @ Forest Ave',
    latitude: 40.625094,
    longitude: -74.148789,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/34af619f-c745-4f09-a81c-e3635dd764c6/image',
  },
  {
    id: '86bdee28-1c05-4ead-900a-f252043e6029',
    name: 'Grand Central Pkwy @ Parson Blvd - 102.50',
    latitude: 40.71592,
    longitude: -73.807822,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/86bdee28-1c05-4ead-900a-f252043e6029/image',
  },
  {
    id: '95045f2c-9108-40c2-9439-a139001d4a74',
    name: 'Ocean Pkwy @ Ditmas Ave',
    latitude: 40.636159,
    longitude: -73.972751,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/95045f2c-9108-40c2-9439-a139001d4a74/image',
  },
  {
    id: '97190ee9-e92c-46ef-a3fc-e8c75d416a9a',
    name: 'Henry Hudson Pkwy @ 232 St',
    latitude: 40.8838314747516,
    longitude: -73.9145135879516,
    area: 'Bronx',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/97190ee9-e92c-46ef-a3fc-e8c75d416a9a/image',
  },
  {
    id: '8f3b6913-9858-49e5-8503-8a173feaf36c',
    name: 'Ocean Pkwy @ Ave U',
    latitude: 40.59785,
    longitude: -73.9655,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/8f3b6913-9858-49e5-8503-8a173feaf36c/image',
  },
  {
    id: '5d1261df-ddca-435a-9292-a0474c44c104',
    name: 'Woodhaven Blvd @ 91 ave',
    latitude: 40.689844,
    longitude: -73.850149,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/5d1261df-ddca-435a-9292-a0474c44c104/image',
  },
  {
    id: '99098e73-0848-4c19-895e-f81651f76c39',
    name: 'C1-CBX-17-Med_at_E.Tremont_Ave-Ex10',
    latitude: 40.822093,
    longitude: -73.818676,
    area: 'Bronx',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/99098e73-0848-4c19-895e-f81651f76c39/image',
  },
  {
    id: '62380b5a-8960-4c2b-9125-d7f088605a7f',
    name: 'Grand Concourse @ E 149 St',
    latitude: 40.81857,
    longitude: -73.927322,
    area: 'Bronx',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/62380b5a-8960-4c2b-9125-d7f088605a7f/image',
  },
  {
    id: '0537e9a6-3e6f-480c-9c6e-bb3ad15356ae',
    name: 'Richmond Ave @ North Access Rd',
    latitude: 40.585826,
    longitude: -74.168392,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/0537e9a6-3e6f-480c-9c6e-bb3ad15356ae/image',
  },
  {
    id: '9b4553f1-6aa3-46eb-8905-ecbfecb83ce3',
    name: 'Northern Blvd @ Honeywell Bridge',
    latitude: 40.752004,
    longitude: -73.931943,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/9b4553f1-6aa3-46eb-8905-ecbfecb83ce3/image',
  },
  {
    id: 'a8b56a8b-1451-4290-9d8f-c770f80c855a',
    name: 'Northern Blvd @ Francis Lewis Blvd',
    latitude: 40.757774,
    longitude: -73.783335,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/a8b56a8b-1451-4290-9d8f-c770f80c855a/image',
  },
  {
    id: '9d86d84c-6d3a-45a6-a8ad-fb5ab52f2b52',
    name: 'E 57 St @ QBB',
    latitude: 40.7589949664454,
    longitude: -73.9644856628626,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/9d86d84c-6d3a-45a6-a8ad-fb5ab52f2b52/image',
  },
  {
    id: '7305c9dc-a6c3-4eab-83df-fd42296efbea',
    name: 'Southern Bl. @ Cross Bronx Expwy',
    latitude: 40.840532,
    longitude: -73.886229,
    area: 'Bronx',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/7305c9dc-a6c3-4eab-83df-fd42296efbea/image',
  },
  {
    id: '9cdf1f47-307d-48e8-8627-e77e189b5fed',
    name: '207 ST @ 9 Ave',
    latitude: 40.8628358166596,
    longitude: -73.9170026779174,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/9cdf1f47-307d-48e8-8627-e77e189b5fed/image',
  },
  {
    id: '800d29e7-aa14-4269-b7a3-22661fe48f55',
    name: 'C5-LIE-27-WB_at_Clearview_Exwy-Ex27',
    latitude: 40.74516675,
    longitude: -73.76996066,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/800d29e7-aa14-4269-b7a3-22661fe48f55/image',
  },
  {
    id: 'adc07b1d-e5e1-45da-bfb7-db8a0519f231',
    name: 'Flushing Ave @ 54 St',
    latitude: 40.715065,
    longitude: -73.913276,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/adc07b1d-e5e1-45da-bfb7-db8a0519f231/image',
  },
  {
    id: 'a21b30f6-e6ca-459d-ac5c-689e8cbc0d72',
    name: 'FDR @ 120 St',
    latitude: 40.796969,
    longitude: -73.929317,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/a21b30f6-e6ca-459d-ac5c-689e8cbc0d72/image',
  },
  {
    id: '9750737e-90f5-4681-9fef-a396f9992540',
    name: 'Woodhaven Blvd @ Metropolitan Ave',
    latitude: 40.711848,
    longitude: -73.859768,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/9750737e-90f5-4681-9fef-a396f9992540/image',
  },
  {
    id: '94051372-369e-4c2f-9850-90763a8faf88',
    name: 'C3-SIE-12-WB_Btwn_Clove_Road_and_Richmond_Road',
    latitude: 40.606423,
    longitude: -74.077846,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/94051372-369e-4c2f-9850-90763a8faf88/image',
  },
  {
    id: '9cf2184a-e075-47c2-9d02-8e6edcdf28b8',
    name: 'Major Deegan @ Triboro Bridge',
    latitude: 40.805652,
    longitude: -73.920676,
    area: 'Bronx',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/9cf2184a-e075-47c2-9d02-8e6edcdf28b8/image',
  },
  {
    id: '9fa5b0dd-e955-449e-97e1-9c53ad9c23a8',
    name: 'GCP @ LGA 94 St Exit',
    latitude: 40.771466,
    longitude: -73.877462,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/9fa5b0dd-e955-449e-97e1-9c53ad9c23a8/image',
  },
  {
    id: '3793f20a-28ce-411d-b09b-f7baa2b6d55b',
    name: 'Grand Central Pkwy @ Midland Pkwy - 62.138',
    latitude: 40.719913,
    longitude: -73.785009,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/3793f20a-28ce-411d-b09b-f7baa2b6d55b/image',
  },
  {
    id: '5efba010-6a58-4df5-ae2c-ef1eda48fad0',
    name: 'West street underpass entrance',
    latitude: 40.70858,
    longitude: -74.0153,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/5efba010-6a58-4df5-ae2c-ef1eda48fad0/image',
  },
  {
    id: '4048d465-2272-446e-bccb-c49ea6d62bd3',
    name: 'FDR Dr @ BPU Entrance',
    latitude: 40.701797,
    longitude: -74.010764,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/4048d465-2272-446e-bccb-c49ea6d62bd3/image',
  },
  {
    id: 'a7611e0c-1028-4975-b94b-14e75ec0b217',
    name: 'Grand Central Pkwy @ Springfield Blvd - 0.98',
    latitude: 40.732333,
    longitude: -73.746767,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/a7611e0c-1028-4975-b94b-14e75ec0b217/image',
  },
  {
    id: 'be732c0a-c4f8-4ae4-a751-1fc011f160e7',
    name: 'Hylan Blvd @ New Dorp Lane',
    latitude: 40.570469,
    longitude: -74.109749,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/be732c0a-c4f8-4ae4-a751-1fc011f160e7/image',
  },
  {
    id: '96636993-475f-46bb-95b6-d5b937065648',
    name: '3 Ave @ E 163 St',
    latitude: 40.824129,
    longitude: -73.9087,
    area: 'Bronx',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/96636993-475f-46bb-95b6-d5b937065648/image',
  },
  {
    id: '1fe143ba-7133-422f-b594-d6712559c523',
    name: '2 Ave @ 125 St',
    latitude: 40.8019529918652,
    longitude: -73.9333963394165,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/1fe143ba-7133-422f-b594-d6712559c523/image',
  },
  {
    id: '1f92fccf-56b8-4f9f-bfd2-48e53984606e',
    name: 'NE Thruway @ Conner St',
    latitude: 40.8839,
    longitude: -73.8259,
    area: 'Bronx',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/1f92fccf-56b8-4f9f-bfd2-48e53984606e/image',
  },
  {
    id: '9bdd7740-762f-48e9-b40c-3db03c2a43f5',
    name: 'Belt Pkwy @ Ocean Pkwy',
    latitude: 40.5832573065532,
    longitude: -73.9666557312011,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/9bdd7740-762f-48e9-b40c-3db03c2a43f5/image',
  },
  {
    id: 'aa857aaf-dd05-46e7-9091-a6c8596a3fbf',
    name: 'S Conduit Ave @ 150 St',
    latitude: 40.665993,
    longitude: -73.78955,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/aa857aaf-dd05-46e7-9091-a6c8596a3fbf/image',
  },
  {
    id: 'ac1d2a7e-8e7e-4dd7-9e4e-d43f531f04af',
    name: 'Belt Pkwy @ 130 St',
    latitude: 40.6666,
    longitude: -73.8104,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/ac1d2a7e-8e7e-4dd7-9e4e-d43f531f04af/image',
  },
  {
    id: '17b6c7dd-2aa7-442a-8832-d39051a47d1b',
    name: 'Park Ave @ 34 St',
    latitude: 40.7470836952846,
    longitude: -73.9813565896605,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/17b6c7dd-2aa7-442a-8832-d39051a47d1b/image',
  },
  {
    id: '9f118098-cee3-4964-8630-b932c94f70a3',
    name: 'Under Cliff Ave @ Boscobe Pl',
    latitude: 40.844403,
    longitude: -73.925012,
    area: 'Bronx',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/9f118098-cee3-4964-8630-b932c94f70a3/image',
  },
  {
    id: 'b47d139f-69ae-427e-86b4-f970f9e990e1',
    name: 'Flushing Ave @ Grand Ave & 64 St',
    latitude: 40.722749,
    longitude: -73.901592,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/b47d139f-69ae-427e-86b4-f970f9e990e1/image',
  },
  {
    id: 'b6558fc0-d62b-4b25-b7aa-6b592bde2c44',
    name: 'Flatbush Ave @ Marine Park',
    latitude: 40.601134,
    longitude: -73.913036,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/b6558fc0-d62b-4b25-b7aa-6b592bde2c44/image',
  },
  {
    id: 'bfeb2434-fd55-4024-8172-f9602ea6ae06',
    name: 'Hutchhinson River Pkwy @ Waterbury Ave',
    latitude: 40.83536,
    longitude: -73.83849,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/bfeb2434-fd55-4024-8172-f9602ea6ae06/image',
  },
  {
    id: '0bf496dc-36dd-4311-808e-84ab6acec605',
    name: 'Queens Blvd @ 63 Dr',
    latitude: 40.730072,
    longitude: -73.86235,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/0bf496dc-36dd-4311-808e-84ab6acec605/image',
  },
  {
    id: '7e13d5e6-bd1a-47af-ba28-39c50e2736c2',
    name: 'Hylan Blvd @ Nelson Ave',
    latitude: 40.542395,
    longitude: -74.145885,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/7e13d5e6-bd1a-47af-ba28-39c50e2736c2/image',
  },
  {
    id: '351d3d12-fd9e-4e4c-b279-cd8f3f1f194c',
    name: 'C1-MDE-01-Cntr_at_E.135th_St-Ex1',
    latitude: 40.803545,
    longitude: -73.916135,
    area: 'Bronx',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/351d3d12-fd9e-4e4c-b279-cd8f3f1f194c/image',
  },
  {
    id: 'b062d611-e0e8-40be-a180-c583391276f5',
    name: 'Park Ave @ 72 St',
    latitude: 40.77114,
    longitude: -73.963907,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/b062d611-e0e8-40be-a180-c583391276f5/image',
  },
  {
    id: 'ae1960ee-1f34-4774-88f5-b195b9c2a505',
    name: 'C5-LIE-15-WB_at_Queens_Blvd-Ex19',
    latitude: 40.732725,
    longitude: -73.8692,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/ae1960ee-1f34-4774-88f5-b195b9c2a505/image',
  },
  {
    id: 'c0e47f5d-29d0-4103-9c69-9e461334a21b',
    name: 'Queens Blvd @ Yellowstone Blvd',
    latitude: 40.722929,
    longitude: -73.847301,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/c0e47f5d-29d0-4103-9c69-9e461334a21b/image',
  },
  {
    id: 'b2924000-6eb1-4449-b201-01c0653b6c68',
    name: 'Pelham Pkwy W/B @ Boston Rd',
    latitude: 40.857212,
    longitude: -73.868891,
    area: 'Bronx',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/b2924000-6eb1-4449-b201-01c0653b6c68/image',
  },
  {
    id: '3ad126cc-3f99-4626-a229-b9ba4d3f4b63',
    name: 'St Nicholas Ave @ 181 St',
    latitude: 40.849657,
    longitude: -73.933675,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/3ad126cc-3f99-4626-a229-b9ba4d3f4b63/image',
  },
  {
    id: 'c173fe45-9067-4582-81ef-cab0aad56afd',
    name: 'Grand St (Borinquen PL) @ South 4 St',
    latitude: 40.710405,
    longitude: -73.958276,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/c173fe45-9067-4582-81ef-cab0aad56afd/image',
  },
  {
    id: 'b963b25c-9fcf-4a12-b502-c57468510315',
    name: 'QBB UL Entrance @ Thomson Ave',
    latitude: 40.745235,
    longitude: -73.9377,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/b963b25c-9fcf-4a12-b502-c57468510315/image',
  },
  {
    id: 'c361e170-2da7-4e96-9546-296e766b37ad',
    name: 'Queens Blvd @ 39 ST',
    latitude: 40.744152,
    longitude: -73.926136,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/c361e170-2da7-4e96-9546-296e766b37ad/image',
  },
  {
    id: 'bdf81be6-bce0-4dfc-91d4-946647f2553e',
    name: 'Woodhaven Blvd @ Liberty Ave',
    latitude: 40.680171,
    longitude: -73.844597,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/bdf81be6-bce0-4dfc-91d4-946647f2553e/image',
  },
  {
    id: 'c3cda16b-e979-48bd-8672-4098194d2dbe',
    name: 'Madison Ave @ 96 St',
    latitude: 40.7864554814967,
    longitude: -73.9539957046508,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/c3cda16b-e979-48bd-8672-4098194d2dbe/image',
  },
  {
    id: '21ca79e4-eec6-4073-914d-117409a7e677',
    name: 'Kissena Blvd @ LIE N S/R',
    latitude: 40.739234,
    longitude: -73.815061,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/21ca79e4-eec6-4073-914d-117409a7e677/image',
  },
  {
    id: '5920b7ab-9e05-429f-971a-b235f3ea8dd9',
    name: 'Amboy Rd @ Nelson Ave',
    latitude: 40.549932,
    longitude: -74.150849,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/5920b7ab-9e05-429f-971a-b235f3ea8dd9/image',
  },
  {
    id: 'c89b62d1-35be-4bb8-b22b-a77c2583733c',
    name: 'Eastern Pkwy @ Utica Ave',
    latitude: 40.668766,
    longitude: -73.931145,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/c89b62d1-35be-4bb8-b22b-a77c2583733c/image',
  },
  {
    id: '4c47eda8-a4a1-4e40-baea-578e0a99e1d8',
    name: 'Beach Channel Dr @B 32 St',
    latitude: 40.598651,
    longitude: -73.766059,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/4c47eda8-a4a1-4e40-baea-578e0a99e1d8/image',
  },
  {
    id: '500b7258-e2ec-4717-8f99-a5497e158ae6',
    name: 'Outerbridge Crossing @ Tyrellan Ave',
    latitude: 40.525714,
    longitude: -74.230356,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/500b7258-e2ec-4717-8f99-a5497e158ae6/image',
  },
  {
    id: '710191bf-5753-49f7-a524-d0db75526600',
    name: 'Morningstar Rd @ Walker St',
    latitude: 40.631138,
    longitude: -74.146937,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/710191bf-5753-49f7-a524-d0db75526600/image',
  },
  {
    id: '1222cb4f-2ed6-44f6-9550-29dd2cd6b839',
    name: 'C3-WSE-07-NB_at_Frsh_Kills_Crk-Ex5',
    latitude: 40.578916,
    longitude: -74.190673,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/1222cb4f-2ed6-44f6-9550-29dd2cd6b839/image',
  },
  {
    id: '39e26a67-8e1d-4760-bd82-59fe3b2db770',
    name: 'C2-GE-14-WB_at_Gowanus_Canal-Ex24',
    latitude: 40.671572,
    longitude: -73.998651,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/39e26a67-8e1d-4760-bd82-59fe3b2db770/image',
  },
  {
    id: 'bcb706e6-135a-4981-8a06-7545f6e05ddd',
    name: 'C3-SIE-11-EB_at_Renwick_Ave',
    latitude: 40.610089,
    longitude: -74.105929,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/bcb706e6-135a-4981-8a06-7545f6e05ddd/image',
  },
  {
    id: 'bfdc1e75-c363-49c6-8236-7e9e9c9c1cdd',
    name: 'C1-MDE-05-SB_at_E.153rd_St-Ex4',
    latitude: 40.825097,
    longitude: -73.931354,
    area: 'Bronx',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/bfdc1e75-c363-49c6-8236-7e9e9c9c1cdd/image',
  },
  {
    id: 'bfcd953c-3faf-48ea-a49a-848c706399b6',
    name: 'Narrows Rd South @ Hylan Blvd',
    latitude: 40.605488,
    longitude: -74.076704,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/bfcd953c-3faf-48ea-a49a-848c706399b6/image',
  },
  {
    id: 'c90f122a-2ea4-4614-b434-3599bcb04a19',
    name: 'Hutchhinson River Pkwy @ Bruckner Expy',
    latitude: 40.83028,
    longitude: -73.83688,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/c90f122a-2ea4-4614-b434-3599bcb04a19/image',
  },
  {
    id: 'ed0f8bd4-fe44-4f86-98a9-91f45b446200',
    name: '3 Ave @ Union St',
    latitude: 40.678345,
    longitude: -73.985427,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/ed0f8bd4-fe44-4f86-98a9-91f45b446200/image',
  },
  {
    id: 'ce959ed6-e7e7-49ed-b932-70b8d18033f2',
    name: 'Queens Blvd @ Van Dam',
    latitude: 40.743034,
    longitude: -73.934624,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/ce959ed6-e7e7-49ed-b932-70b8d18033f2/image',
  },
  {
    id: 'f2b94b32-fc41-42b6-935d-8330374ca05a',
    name: '1 Ave @ 110 St',
    latitude: 40.7914267751247,
    longitude: -73.9380741119384,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/f2b94b32-fc41-42b6-935d-8330374ca05a/image',
  },
  {
    id: 'a23d8461-9d7c-4e11-a392-777ef35b48ba',
    name: 'Northern Blvd @ Little Neck Pkwy',
    latitude: 40.770649,
    longitude: -73.735503,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/a23d8461-9d7c-4e11-a392-777ef35b48ba/image',
  },
  {
    id: 'd05b98ae-f2a7-4c26-8238-754081877484',
    name: 'Northern Blvd @ Utopia Pkwy',
    latitude: 40.757685,
    longitude: -73.793017,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/d05b98ae-f2a7-4c26-8238-754081877484/image',
  },
  {
    id: 'fdb5054c-08b7-4a84-91cb-b61aa890d8b0',
    name: 'BQE @ Vander Voort Ave',
    latitude: 40.72395,
    longitude: -73.937599,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/fdb5054c-08b7-4a84-91cb-b61aa890d8b0/image',
  },
  {
    id: 'd7496b4f-f3b5-4a49-89d3-4212e0606205',
    name: 'Gowanus Expy @ FT. Hamilton Pkwy',
    latitude: 40.622258,
    longitude: -74.021137,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/d7496b4f-f3b5-4a49-89d3-4212e0606205/image',
  },
  {
    id: 'd77f8bad-9521-4205-9d9f-5d9468bccec7',
    name: 'Van wyck Expy @ 111 Ave',
    latitude: 40.684667,
    longitude: -73.806707,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/d77f8bad-9521-4205-9d9f-5d9468bccec7/image',
  },
  {
    id: 'd1d8cd99-7609-409a-a739-f5913dabf4e6',
    name: 'Lexington Ave @ 49 St',
    latitude: 40.7558782935853,
    longitude: -73.972833819289,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/d1d8cd99-7609-409a-a739-f5913dabf4e6/image',
  },
  {
    id: 'd681357c-1296-4bb0-901d-a1ebc8ab17c7',
    name: 'BB-50 South Rdwy @ West of Bklyn Twr',
    latitude: 40.705361,
    longitude: -73.996088,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/d681357c-1296-4bb0-901d-a1ebc8ab17c7/image',
  },
  {
    id: '38a9cb68-6d0c-4171-a809-344c581dfcb0',
    name: 'C5-BQE-44-Med_at_31st_Ave-Ex41',
    latitude: 40.758099,
    longitude: -73.899761,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/38a9cb68-6d0c-4171-a809-344c581dfcb0/image',
  },
  {
    id: 'd67b0c15-549a-42f9-b99c-13023667f724',
    name: 'C1-SHE-02-SB_at_Cross_Brx_Expwy',
    latitude: 40.837446,
    longitude: -73.880984,
    area: 'Bronx',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/d67b0c15-549a-42f9-b99c-13023667f724/image',
  },
  {
    id: '805528c0-be4f-4dc0-a150-d2b38bca189f',
    name: 'Cross Bay Blvd @ Wildlife Refuge',
    latitude: 40.61998,
    longitude: -73.8257,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/805528c0-be4f-4dc0-a150-d2b38bca189f/image',
  },
  {
    id: 'c8d37f98-5b6f-4a93-bfc5-eadf4f91726a',
    name: 'Beach Channel Dr @B 140 St',
    latitude: 40.57757,
    longitude: -73.859754,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/c8d37f98-5b6f-4a93-bfc5-eadf4f91726a/image',
  },
  {
    id: 'cc6c54fa-43fb-4484-a598-20feea2adb89',
    name: 'Queens Blvd @ 36 St',
    latitude: 40.744584,
    longitude: -73.928866,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/cc6c54fa-43fb-4484-a598-20feea2adb89/image',
  },
  {
    id: 'ec44d35d-829f-4bcf-a38f-3bf45a6d31b4',
    name: 'West shore Expy @ Park & Ride',
    latitude: 40.526252,
    longitude: -74.223358,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/ec44d35d-829f-4bcf-a38f-3bf45a6d31b4/image',
  },
  {
    id: '046d6b99-ffe1-4761-beb4-5c0a2fc6000e',
    name: 'Woodhaven Blvd @ Furmanville Ave',
    latitude: 40.720287,
    longitude: -73.865571,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/046d6b99-ffe1-4761-beb4-5c0a2fc6000e/image',
  },
  {
    id: 'f68ca680-62ac-4ad5-aa9d-7a83742b15d3',
    name: 'Staten Island Expy @ Fingerboard',
    latitude: 40.604174,
    longitude: -74.069091,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/f68ca680-62ac-4ad5-aa9d-7a83742b15d3/image',
  },
  {
    id: 'd138b651-e2ed-4065-a0f9-ef56a65f61d4',
    name: 'West Broadway @ West Houston St',
    latitude: 40.726958,
    longitude: -73.999928,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/d138b651-e2ed-4065-a0f9-ef56a65f61d4/image',
  },
  {
    id: '936fce3c-14c3-42c2-8e0d-7bce5a81ecc6',
    name: 'Hylan Blvd @ Seguine Ave',
    latitude: 40.519122,
    longitude: -74.197091,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/936fce3c-14c3-42c2-8e0d-7bce5a81ecc6/image',
  },
  {
    id: '5c29ba71-1757-45db-8318-e1a2bad57e75',
    name: 'Queens Blvd @ Hillside Ave',
    latitude: 40.704168,
    longitude: -73.815211,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/5c29ba71-1757-45db-8318-e1a2bad57e75/image',
  },
  {
    id: 'e5cd3feb-ca2f-4108-b6ae-678b5ec32dab',
    name: 'Webster Ave @ E 165',
    latitude: 40.827872,
    longitude: -73.912005,
    area: 'Bronx',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/e5cd3feb-ca2f-4108-b6ae-678b5ec32dab/image',
  },
  {
    id: '0b7a91d5-e33e-42b3-a05a-951be0ab1663',
    name: 'Staten Island Expy @ Hylan Blvd',
    latitude: 40.606261,
    longitude: -74.077786,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/0b7a91d5-e33e-42b3-a05a-951be0ab1663/image',
  },
  {
    id: '4b99e17b-d784-4ae3-a8f4-fb20e05895ee',
    name: 'Beach Channel Dr @B 90 St',
    latitude: 40.589356,
    longitude: -73.815578,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/4b99e17b-d784-4ae3-a8f4-fb20e05895ee/image',
  },
  {
    id: '75a7b81a-6233-47bf-8428-ea6c9edec1f8',
    name: 'Riverside Dr @ W 165 St',
    latitude: 40.84102,
    longitude: -73.9446,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/75a7b81a-6233-47bf-8428-ea6c9edec1f8/image',
  },
  {
    id: 'e73b2210-e5e7-42c0-a48f-5ce07b28da43',
    name: 'Park Ave @ 96 St',
    latitude: 40.786516,
    longitude: -73.952456,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/e73b2210-e5e7-42c0-a48f-5ce07b28da43/image',
  },
  {
    id: '9c13da63-709c-496f-9ff1-0b201ef2530d',
    name: 'FDR @ Jackson St',
    latitude: 40.710874,
    longitude: -73.980571,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/9c13da63-709c-496f-9ff1-0b201ef2530d/image',
  },
  {
    id: '4be502c3-830e-40d3-8c39-1047d50adc9c',
    name: 'C2-BQE-16-WB_at_Sands_St-Ex29A',
    latitude: 40.699385,
    longitude: -73.983921,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/4be502c3-830e-40d3-8c39-1047d50adc9c/image',
  },
  {
    id: '7e2400e3-cad2-407a-927b-d575a35048e3',
    name: 'Central Park West @ 66 St',
    latitude: 40.772441,
    longitude: -73.978751,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/7e2400e3-cad2-407a-927b-d575a35048e3/image',
  },
  {
    id: 'a828693f-10cc-43d9-9b01-15a725b75c05',
    name: 'C3-SIE-01-WB_at_Forest_Ave',
    latitude: 40.625312,
    longitude: -74.17785,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/a828693f-10cc-43d9-9b01-15a725b75c05/image',
  },
  {
    id: 'dd29dfed-4e13-43ae-935b-54660df1bcae',
    name: 'MHB-29 Brklyn S URDWY @ Twr',
    latitude: 40.705039,
    longitude: -73.989502,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/dd29dfed-4e13-43ae-935b-54660df1bcae/image',
  },
  {
    id: '90c74649-458d-4b5f-8f58-9ab77f03f4ad',
    name: 'Central Park West @ 77 St',
    latitude: 40.779481,
    longitude: -73.973578,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/90c74649-458d-4b5f-8f58-9ab77f03f4ad/image',
  },
  {
    id: '9cc8495e-aeee-4759-adba-5a6bf5efd4b9',
    name: '3 Ave @ 23 St',
    latitude: 40.7388335617157,
    longitude: -73.9831563349364,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/9cc8495e-aeee-4759-adba-5a6bf5efd4b9/image',
  },
  {
    id: 'e38e3af7-19e6-4c8d-aa05-a21c8d5a7b29',
    name: 'C1-BRE-10-NB_at_Middle_Twn_Rd-Ex7C',
    latitude: 40.84549,
    longitude: -73.825543,
    area: 'Bronx',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/e38e3af7-19e6-4c8d-aa05-a21c8d5a7b29/image',
  },
  {
    id: 'c74a2510-0ce0-48f2-8fbe-36fdd1a98379',
    name: 'Hamilton Ave @ Hamilton PL @ 15 St (S SR)',
    latitude: 40.669085,
    longitude: -73.997168,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/c74a2510-0ce0-48f2-8fbe-36fdd1a98379/image',
  },
  {
    id: '1389ca99-0d3f-4c27-bc45-b0aa238ea7d2',
    name: 'SIE @ Richmond Ave',
    latitude: 40.614885,
    longitude: -74.157435,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/1389ca99-0d3f-4c27-bc45-b0aa238ea7d2/image',
  },
  {
    id: 'f3d14ce1-8df5-4c5c-88b8-f17f56077e04',
    name: 'Flatbush Ave @ Willoughby',
    latitude: 40.691214327643,
    longitude: -73.9822340011596,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/f3d14ce1-8df5-4c5c-88b8-f17f56077e04/image',
  },
  {
    id: '1c3a5c25-a40c-40d6-8f6b-030294269fd1',
    name: 'Lily Pond Ave @ School Rd',
    latitude: 40.6048464,
    longitude: -74.065641,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/1c3a5c25-a40c-40d6-8f6b-030294269fd1/image',
  },
  {
    id: '36d14f1c-b6fb-474c-9703-ecfd101ead72',
    name: 'Northern Blvd @ 51 St',
    latitude: 40.752967,
    longitude: -73.910238,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/36d14f1c-b6fb-474c-9703-ecfd101ead72/image',
  },
  {
    id: 'efa9a3d5-e5fa-440e-8f6e-68436b8c397b',
    name: 'Malcom X Blvd @ 145 St',
    latitude: 40.820458,
    longitude: -73.936233,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/efa9a3d5-e5fa-440e-8f6e-68436b8c397b/image',
  },
  {
    id: 'eca4e591-4ac8-471c-8e76-4710b52e6f9b',
    name: 'Beach Channel Dr @B Mott Ave',
    latitude: 40.605347,
    longitude: -73.75518,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/eca4e591-4ac8-471c-8e76-4710b52e6f9b/image',
  },
  {
    id: 'f4d2c0f5-0148-45e7-95ba-a5185d8e8060',
    name: 'Park Ave @ 57 St',
    latitude: 40.761615778381,
    longitude: -73.9707524905279,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/f4d2c0f5-0148-45e7-95ba-a5185d8e8060/image',
  },
  {
    id: 'ed12f2da-9f65-44f0-a162-123c412716c6',
    name: 'Canal Street @ Allen Street',
    latitude: 40.7150861999536,
    longitude: -73.9925114202795,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/ed12f2da-9f65-44f0-a162-123c412716c6/image',
  },
  {
    id: 'ecdddb78-10be-47c6-ba27-e5d9da6b9a22',
    name: 'Water St @ John St',
    latitude: 40.706050863874,
    longitude: -74.0048503875732,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/ecdddb78-10be-47c6-ba27-e5d9da6b9a22/image',
  },
  {
    id: 'f3c6fe0c-75c8-4ce9-ad9a-5b7eb8e9087e',
    name: '1 Ave @ 86 St',
    latitude: 40.7760243030083,
    longitude: -73.9493179321289,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/f3c6fe0c-75c8-4ce9-ad9a-5b7eb8e9087e/image',
  },
  {
    id: 'b995be5a-a469-4cf6-b2ee-197e8e9eecd9',
    name: 'Cross Bay Blvd @ 20 Rd',
    latitude: 40.598884,
    longitude: -73.820711,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/b995be5a-a469-4cf6-b2ee-197e8e9eecd9/image',
  },
  {
    id: 'd4add2b5-0a3c-43dd-ad8f-edc72b9ab2e5',
    name: 'WBB-8 NIR Bklyn Anch./Kent Av',
    latitude: 40.7120848,
    longitude: -73.9670222,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/d4add2b5-0a3c-43dd-ad8f-edc72b9ab2e5/image',
  },
  {
    id: '93dea5a7-a63f-4415-ae12-f32b62540f11',
    name: 'Kenmare St @ Cleveland pl',
    latitude: 40.72147,
    longitude: -73.9974,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/93dea5a7-a63f-4415-ae12-f32b62540f11/image',
  },
  {
    id: '82ff853c-50e3-403a-855b-5f17708a4f38',
    name: 'Sands St @ Pearl St - quad - ptz - 1.10',
    latitude: 40.700056,
    longitude: -73.987778,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/82ff853c-50e3-403a-855b-5f17708a4f38/image',
  },
  {
    id: 'f7c4d5d5-f4d4-4590-9459-6491507ae9f9',
    name: '1 Ave @ 59 St',
    latitude: 40.759687,
    longitude: -73.96201,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/f7c4d5d5-f4d4-4590-9459-6491507ae9f9/image',
  },
  {
    id: 'af1bbb22-487f-4286-954d-41c2b506ed7d',
    name: 'Montgomergy @ South St',
    latitude: 40.710689,
    longitude: -73.984656,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/af1bbb22-487f-4286-954d-41c2b506ed7d/image',
  },
  {
    id: 'f4633287-e3eb-463e-a73c-0917e6243c5b',
    name: 'GR Brewer @ Belt',
    latitude: 40.666739839829,
    longitude: -73.7709617614746,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/f4633287-e3eb-463e-a73c-0917e6243c5b/image',
  },
  {
    id: 'ea3029f6-ce2c-463a-9e05-7218862f60a2',
    name: 'MLK Expy @ Walker St',
    latitude: 40.63091,
    longitude: -74.14612,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/ea3029f6-ce2c-463a-9e05-7218862f60a2/image',
  },
  {
    id: '67ef8775-026c-4152-8a81-c7251e0677ca',
    name: 'Northern Blvd @ 161 St',
    latitude: 40.762638,
    longitude: -73.804617,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/67ef8775-026c-4152-8a81-c7251e0677ca/image',
  },
  {
    id: 'ed788fa2-c602-4676-b0fa-913d1a17a123',
    name: 'BB-66 North Rdwy @ Above Water St/Bklyn',
    latitude: 40.703392,
    longitude: -73.99335,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/ed788fa2-c602-4676-b0fa-913d1a17a123/image',
  },
  {
    id: '4302c1d7-48aa-45a8-a9cc-93e3132c1530',
    name: 'C1-CBE-03_N_NB_at_Nelson_Ave-Ex02A',
    latitude: 40.844781,
    longitude: -73.920574,
    area: 'Bronx',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/4302c1d7-48aa-45a8-a9cc-93e3132c1530/image',
  },
  {
    id: 'fd82a010-c29e-4bcb-8d70-dd2204879a97',
    name: 'Water St @ Whitehall',
    latitude: 40.702389,
    longitude: -74.012806,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/fd82a010-c29e-4bcb-8d70-dd2204879a97/image',
  },
  {
    id: 'defa5e30-d6c7-4582-9ceb-03ff0fe7b93a',
    name: '9 Ave @ 34 St',
    latitude: 40.7534082474864,
    longitude: -73.9963142012874,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/defa5e30-d6c7-4582-9ceb-03ff0fe7b93a/image',
  },
  {
    id: '81445fd9-b8f7-47ce-9ac4-c7fa58addd81',
    name: 'MHB-18 Manh LRW @ EOF X Over',
    latitude: 40.716139,
    longitude: -73.996063,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/81445fd9-b8f7-47ce-9ac4-c7fa58addd81/image',
  },
  {
    id: '9f6b60c8-b940-4eec-a3c5-4b60d24c751b',
    name: 'YORK AVENUE @ EAST 60 STREET',
    latitude: 40.759324,
    longitude: -73.95905,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/9f6b60c8-b940-4eec-a3c5-4b60d24c751b/image',
  },
  {
    id: '85809312-60f2-4a52-a694-82628529c05a',
    name: 'Central Park S @ Columbus Cr',
    latitude: 40.7677366852749,
    longitude: -73.9814615249633,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/85809312-60f2-4a52-a694-82628529c05a/image',
  },
  {
    id: '7a183d27-7c22-4014-ac9a-726efa472c79',
    name: 'Northern Blvd @ Bell Blvd',
    latitude: 40.760288,
    longitude: -73.769377,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/7a183d27-7c22-4014-ac9a-726efa472c79/image',
  },
  {
    id: 'fb62b0fd-deb9-4a64-b114-17a5f01418a4',
    name: 'Rockaway Blvd @ Van Wyck Expy W S/R',
    latitude: 40.674459,
    longitude: -73.80218,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/fb62b0fd-deb9-4a64-b114-17a5f01418a4/image',
  },
  {
    id: '36d22d6d-bffd-4466-8a9c-9c78a1bb9021',
    name: 'Victory Blvd @ Bay St',
    latitude: 40.637748,
    longitude: -74.076018,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/36d22d6d-bffd-4466-8a9c-9c78a1bb9021/image',
  },
  {
    id: '19c66e73-e218-42d8-af0b-a0ca53e6bf86',
    name: 'Queens Blvd @ 51 St',
    latitude: 40.742627,
    longitude: -73.914056,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/19c66e73-e218-42d8-af0b-a0ca53e6bf86/image',
  },
  {
    id: 'fa287d30-44a9-48ef-90d6-5ab0a54eab15',
    name: 'Flatbush Ave and Atlantic Ave',
    latitude: 40.6832090346707,
    longitude: -73.9769983291626,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/fa287d30-44a9-48ef-90d6-5ab0a54eab15/image',
  },
  {
    id: 'f664cb82-a0fc-467e-9a6a-ca34c89cc63c',
    name: 'Northern Blvd @ Main St',
    latitude: 40.762967,
    longitude: -73.831958,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/f664cb82-a0fc-467e-9a6a-ca34c89cc63c/image',
  },
  {
    id: 'f78c30e5-2a4d-4a71-b5d4-482ba70d585f',
    name: 'FDR @ E 127 St',
    latitude: 40.803143,
    longitude: -73.930444,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/f78c30e5-2a4d-4a71-b5d4-482ba70d585f/image',
  },
  {
    id: '64ed1f5d-ba90-4c12-afda-9a9c3e658efd',
    name: 'Ocean Pkwy @ Ave X',
    latitude: 40.591079,
    longitude: -73.965347,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/64ed1f5d-ba90-4c12-afda-9a9c3e658efd/image',
  },
  {
    id: 'd0ea28d7-e1d3-4277-aebc-586a70b60957',
    name: 'BQE @ Kane St',
    latitude: 40.687257,
    longitude: -73.999876,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/d0ea28d7-e1d3-4277-aebc-586a70b60957/image',
  },
  {
    id: 'e7c0ccc5-bf19-453f-a5cd-c02b9feb2123',
    name: 'Drumgoogle Rd E @ Wainwright Ave',
    latitude: 40.55919,
    longitude: -74.171699,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/e7c0ccc5-bf19-453f-a5cd-c02b9feb2123/image',
  },
  {
    id: 'b591a4be-a1aa-4978-ab2c-be4a17eb190e',
    name: 'Fordham Rd @ Major Deegan Expy',
    latitude: 40.861906,
    longitude: -73.912878,
    area: 'Bronx',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/b591a4be-a1aa-4978-ab2c-be4a17eb190e/image',
  },
  {
    id: 'db5f8b82-99b1-45f3-a520-7d1f91d0a49a',
    name: '1 Ave @ E 14 St',
    latitude: 40.731331,
    longitude: -73.982561,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/db5f8b82-99b1-45f3-a520-7d1f91d0a49a/image',
  },
  {
    id: '4bd443cf-374f-493b-a99e-5f7ef81bb62c',
    name: '3 Ave @ E 88 St',
    latitude: 40.780144,
    longitude: -73.953037,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/4bd443cf-374f-493b-a99e-5f7ef81bb62c/image',
  },
  {
    id: '43bb4857-e86e-4775-916e-6b26cedaf554',
    name: 'Broadway @ 125 St',
    latitude: 40.81575,
    longitude: -73.9585,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/43bb4857-e86e-4775-916e-6b26cedaf554/image',
  },
  {
    id: '1dddf912-4718-4b2a-94dd-1f793a9ed22c',
    name: '6 Ave @ 49 St',
    latitude: 40.759281077223,
    longitude: -73.9808977882913,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/1dddf912-4718-4b2a-94dd-1f793a9ed22c/image',
  },
  {
    id: 'bedbc19d-977d-40b6-ba48-01c5454bea69',
    name: 'College Point Blvd @ Sanford Ave',
    latitude: 40.75467,
    longitude: -73.833092,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/bedbc19d-977d-40b6-ba48-01c5454bea69/image',
  },
  {
    id: '0a49d947-2a5b-498d-a386-2cef5ce883fa',
    name: '50 St Btwn 8 Ave & Broadway',
    latitude: 40.761861,
    longitude: -73.985123,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/0a49d947-2a5b-498d-a386-2cef5ce883fa/image',
  },
  {
    id: '935fdfa1-d810-45fe-9534-e035e059b8ec',
    name: 'C2-BQE-19-WB_at_Kent_Ave-Ex31',
    latitude: 40.699898,
    longitude: -73.962065,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/935fdfa1-d810-45fe-9534-e035e059b8ec/image',
  },
  {
    id: '6be5adfc-1912-4811-9a04-01c8866280bb',
    name: 'West St @ Murray',
    latitude: 40.715249,
    longitude: -74.013364,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/6be5adfc-1912-4811-9a04-01c8866280bb/image',
  },
  {
    id: '57e5f44a-4515-4bc2-877b-e6373fce5a66',
    name: 'Queens Blvd @ Union TPKE',
    latitude: 40.714316,
    longitude: -73.830834,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/57e5f44a-4515-4bc2-877b-e6373fce5a66/image',
  },
  {
    id: '2d59011b-a99e-45a1-85d9-1fe127b19fad',
    name: 'WBB #25 SIR 4 @ Bklyn Twr',
    latitude: 40.712875,
    longitude: -73.9700304,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/2d59011b-a99e-45a1-85d9-1fe127b19fad/image',
  },
  {
    id: 'b0670166-0aa0-4f93-a6f6-8bf07a9ea663',
    name: 'Morningstar Rd @ Richmond Terr.',
    latitude: 40.637939,
    longitude: -74.144797,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/b0670166-0aa0-4f93-a6f6-8bf07a9ea663/image',
  },
  {
    id: '1f0cfaad-4c0a-46e8-a5e3-f206d83a875d',
    name: 'Delancy St @ Essex St',
    latitude: 40.718557,
    longitude: -73.988199,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/1f0cfaad-4c0a-46e8-a5e3-f206d83a875d/image',
  },
  {
    id: '1927b469-e2dc-4943-a70c-e6e52fd4c48c',
    name: 'Broadway @ 46 St- Quad South',
    latitude: 40.758692,
    longitude: -73.985371,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/1927b469-e2dc-4943-a70c-e6e52fd4c48c/image',
  },
  {
    id: 'e08c24be-e2fe-4d83-bc08-bf88cdebdd63',
    name: 'Webster Ave @ E 180 St',
    latitude: 40.851889,
    longitude: -73.898344,
    area: 'Bronx',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/e08c24be-e2fe-4d83-bc08-bf88cdebdd63/image',
  },
  {
    id: '9bb33444-d2ec-47bd-952a-174f87013736',
    name: '7 AVE / ADAM CLAYTON POWELL BLVD@ 125 St',
    latitude: 40.80896,
    longitude: -73.9483,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/9bb33444-d2ec-47bd-952a-174f87013736/image',
  },
  {
    id: '2b391c96-b487-4e60-81ad-784766fa48da',
    name: 'LIE @ Marathon Pkwy',
    latitude: 40.760716,
    longitude: -73.73183,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/2b391c96-b487-4e60-81ad-784766fa48da/image',
  },
  {
    id: '2d1a4d63-7755-4a4f-bce2-79a24bd212bc',
    name: 'Victory Blvd @ Christopher/Lamberts La - quad - ptz -131.3',
    latitude: 40.60841,
    longitude: -74.15539,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/2d1a4d63-7755-4a4f-bce2-79a24bd212bc/image',
  },
  {
    id: '5beee073-18a8-4349-af6b-75eff7a78371',
    name: 'Church Street @ Vesey',
    latitude: 40.712078,
    longitude: -74.010108,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/5beee073-18a8-4349-af6b-75eff7a78371/image',
  },
  {
    id: '53295394-387c-4a43-b472-52494ac8122e',
    name: 'Drumgoole Rd E @ Bloomingdale Rd - quad - ptz - 143.26',
    latitude: 40.52793,
    longitude: -74.21655,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/53295394-387c-4a43-b472-52494ac8122e/image',
  },
  {
    id: 'c1b36d36-ce3d-43e3-af83-0cb29bd67e10',
    name: 'Boerum Pl @ Fulton St & Joralemon St',
    latitude: 40.692174,
    longitude: -73.98913,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/c1b36d36-ce3d-43e3-af83-0cb29bd67e10/image',
  },
  {
    id: '1b2c9e6b-8c35-47a2-aa60-fdd688cb61bf',
    name: 'Woodhaven Blvd @ Union Tpke',
    latitude: 40.70561,
    longitude: -73.8582,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/1b2c9e6b-8c35-47a2-aa60-fdd688cb61bf/image',
  },
  {
    id: '63df45c1-928a-456f-a69f-8acd7d4a30c4',
    name: 'BB-30 South East Manhattan Tower',
    latitude: 40.707376,
    longitude: -73.998188,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/63df45c1-928a-456f-a69f-8acd7d4a30c4/image',
  },
  {
    id: '0ad90cca-a6b0-4968-abdd-ca81ae497848',
    name: 'Henry Hudson @ 137 St',
    latitude: 40.8219936715493,
    longitude: -73.9572572708129,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/0ad90cca-a6b0-4968-abdd-ca81ae497848/image',
  },
  {
    id: 'ef24beea-023c-4377-86c9-f9c8836c961b',
    name: 'C3-SIE-04A-WB_at_Richmond Ave',
    latitude: 40.61544,
    longitude: -74.157459,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/ef24beea-023c-4377-86c9-f9c8836c961b/image',
  },
  {
    id: '6041c9a9-4414-4442-9acd-a723eccd9277',
    name: 'Cross Bay Blvd @ 157 Ave',
    latitude: 40.662511,
    longitude: -73.840815,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/6041c9a9-4414-4442-9acd-a723eccd9277/image',
  },
  {
    id: '906f6403-ece7-49b7-98ef-8823e745bfd3',
    name: 'FDR Dr @ 10 St',
    latitude: 40.724136,
    longitude: -73.973412,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/906f6403-ece7-49b7-98ef-8823e745bfd3/image',
  },
  {
    id: '52b1ec32-8603-41e1-af1f-b1e1e33752cb',
    name: 'Drumgoole Rd E @ Arden Ave - quad - Ptz - 1.130',
    latitude: 40.54655,
    longitude: -74.18044,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/52b1ec32-8603-41e1-af1f-b1e1e33752cb/image',
  },
  {
    id: '0f12dfd0-76dc-4b34-80ee-b10ceeb84058',
    name: '2nd Camera South Bound BPU-148.57',
    latitude: 40.704515,
    longitude: -74.016696,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/0f12dfd0-76dc-4b34-80ee-b10ceeb84058/image',
  },
  {
    id: 'a01a8c98-d314-4eb4-b97c-4a4f80d71c4b',
    name: 'Seagirt Blvd @ B 32 St',
    latitude: 40.5958,
    longitude: -73.764771,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/a01a8c98-d314-4eb4-b97c-4a4f80d71c4b/image',
  },
  {
    id: '74ca7d62-c8e5-4986-82fa-cd8d8db835b9',
    name: 'BB- 42 South Rdwy @ Bridge Midspan',
    latitude: 40.705954,
    longitude: -73.996802,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/74ca7d62-c8e5-4986-82fa-cd8d8db835b9/image',
  },
  {
    id: '1c51b3ec-3d29-4025-928d-4e182e7c0bd5',
    name: 'Grand Army Plaza',
    latitude: 40.672744,
    longitude: -73.968781,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/1c51b3ec-3d29-4025-928d-4e182e7c0bd5/image',
  },
  {
    id: '54d81029-7015-4c05-941b-94688c5aae85',
    name: 'BB-45 South Rdwy @ 350Ft West of Bklyn Twr',
    latitude: 40.704726,
    longitude: -73.9953,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/54d81029-7015-4c05-941b-94688c5aae85/image',
  },
  {
    id: '0173e3be-ac26-49b0-bf76-642428d0721a',
    name: 'QBB NOR @ W Channel',
    latitude: 40.758048,
    longitude: -73.957042,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/0173e3be-ac26-49b0-bf76-642428d0721a/image',
  },
  {
    id: '06d36cfe-a331-4cfd-8ff1-84e4d711e418',
    name: 'E 63 St @ QBB',
    latitude: 40.762708,
    longitude: -73.961589,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/06d36cfe-a331-4cfd-8ff1-84e4d711e418/image',
  },
  {
    id: '3095997f-dd41-4e71-a810-9290576c17a6',
    name: '12 Ave @ 57 St',
    latitude: 40.7715319506809,
    longitude: -73.9942101957323,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/3095997f-dd41-4e71-a810-9290576c17a6/image',
  },
  {
    id: 'a10cbaf4-ea20-4a01-93a3-b338cd92370b',
    name: 'Richmond Ave @ Wainwright Ave - quad - ptz - 0.146',
    latitude: 40.56032,
    longitude: -74.16981,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/a10cbaf4-ea20-4a01-93a3-b338cd92370b/image',
  },
  {
    id: '67f77766-bd19-4082-adeb-88d59866c490',
    name: 'Long Island Expy @ QMT @ Pulaski Br',
    latitude: 40.74148,
    longitude: -73.9509,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/67f77766-bd19-4082-adeb-88d59866c490/image',
  },
  {
    id: '5b44d19e-de48-4941-b071-d2a4c08bd230',
    name: '2 Ave @ 58 St',
    latitude: 40.7592529942977,
    longitude: -73.9646816253662,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/5b44d19e-de48-4941-b071-d2a4c08bd230/image',
  },
  {
    id: '9d7c4525-fba3-4ffe-ae79-f814f7dccf4e',
    name: 'Roosevelt Ave @ Broadway &  74 st',
    latitude: 40.746808,
    longitude: -73.891632,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/9d7c4525-fba3-4ffe-ae79-f814f7dccf4e/image',
  },
  {
    id: 'b6cd1640-fdc3-4525-bbb4-f148699876df',
    name: 'Major Deegan Expy @Van Cortland Pk S',
    latitude: 40.885972,
    longitude: -73.896784,
    area: 'Bronx',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/b6cd1640-fdc3-4525-bbb4-f148699876df/image',
  },
  {
    id: '6267afd2-e292-4f0e-a4c1-767eac770814',
    name: 'Clearview Expy @ 73 Ave',
    latitude: 40.73975,
    longitude: -73.76965,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/6267afd2-e292-4f0e-a4c1-767eac770814/image',
  },
  {
    id: '96ea2271-4739-40bb-9aea-6429c63dfb34',
    name: 'Cadman Plz W @ Prospect St - quad - 1.3',
    latitude: 40.700756,
    longitude: -73.990942,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/96ea2271-4739-40bb-9aea-6429c63dfb34/image',
  },
  {
    id: 'ffd8af30-7474-4569-bfd5-db6955aecadd',
    name: 'Bronx River Pkwy @ 177 ST Exit',
    latitude: 40.83796,
    longitude: -73.87328,
    area: 'Bronx',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/ffd8af30-7474-4569-bfd5-db6955aecadd/image',
  },
  {
    id: 'cda76289-afd2-498e-a0e9-420a1854c38a',
    name: 'Flatbush Ave @ Fulton St',
    latitude: 40.6880253424274,
    longitude: -73.9803886413574,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/cda76289-afd2-498e-a0e9-420a1854c38a/image',
  },
  {
    id: '989b2f37-3fd6-4ccc-bcb5-ea2199bd2645',
    name: 'BQE @ Sands St (westbound) - video detection',
    latitude: 40.700292,
    longitude: -73.985032,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/989b2f37-3fd6-4ccc-bcb5-ea2199bd2645/image',
  },
  {
    id: 'a6811e67-15ac-4289-97be-9c6dd1ae1c75',
    name: 'QBB NOR @ 1 Ave',
    latitude: 40.760066,
    longitude: -73.961675,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/a6811e67-15ac-4289-97be-9c6dd1ae1c75/image',
  },
  {
    id: '11ce0ee6-349b-4120-a66e-6299d28915f5',
    name: '3rd Av. @ E 156 St.',
    latitude: 40.820328,
    longitude: -73.913069,
    area: 'Bronx',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/11ce0ee6-349b-4120-a66e-6299d28915f5/image',
  },
  {
    id: '81c2390a-2dc5-4a44-9fc3-9870b360032e',
    name: 'Hempstead Ave @ Cross Island Pkwy (PTZ)',
    latitude: 40.710823,
    longitude: -73.727495,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/81c2390a-2dc5-4a44-9fc3-9870b360032e/image',
  },
  {
    id: '8645493f-d08c-4c0e-a572-b40f5fbeec56',
    name: 'Van Dam St @ 48 Ave',
    latitude: 40.741099,
    longitude: -73.9343,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/8645493f-d08c-4c0e-a572-b40f5fbeec56/image',
  },
  {
    id: 'f6ca5824-45da-48a9-8268-2725eed58b79',
    name: 'Fordham Rd and Grand Concourse',
    latitude: 40.8617972187343,
    longitude: -73.8967037200927,
    area: 'Bronx',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/f6ca5824-45da-48a9-8268-2725eed58b79/image',
  },
  {
    id: '15fca74d-c3e9-42ee-8f32-5b708ef36477',
    name: 'Hutchhinson River Pkwy @ Westchester Ave',
    latitude: 40.84693,
    longitude: -73.83666,
    area: 'Bronx',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/15fca74d-c3e9-42ee-8f32-5b708ef36477/image',
  },
  {
    id: 'e0ac368d-414a-4606-bea5-236e94a2d5b5',
    name: 'Brooklyn Bridge @ Centre Street',
    latitude: 40.7117763624494,
    longitude: -74.0047216415405,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/e0ac368d-414a-4606-bea5-236e94a2d5b5/image',
  },
  {
    id: '2dcc40fd-3e70-44ba-8c6c-398e9ee4a22d',
    name: 'Atlantic Ave @ Boerum St',
    latitude: 40.6884158386124,
    longitude: -73.9902591705322,
    area: 'Brooklyn',
    isOnline: 'false',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/2dcc40fd-3e70-44ba-8c6c-398e9ee4a22d/image',
  },
  {
    id: 'ce3ef423-8d29-40c3-9e27-f150a12ca10a',
    name: 'Victory Blvd @ Gannon Ave -131.34',
    latitude: 40.60958,
    longitude: -74.14953,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/ce3ef423-8d29-40c3-9e27-f150a12ca10a/image',
  },
  {
    id: 'ad00e0d3-02f2-4578-b0f1-b9d176d117d1',
    name: 'Richmond Ave @ Signs Rd - quad - ptz - 0.138',
    latitude: 40.60171,
    longitude: -74.16325,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/ad00e0d3-02f2-4578-b0f1-b9d176d117d1/image',
  },
  {
    id: '404fac12-9b5c-430b-a01b-12b50d39521c',
    name: '9 Ave @ 49 St',
    latitude: 40.7628734544829,
    longitude: -73.9894306186342,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/404fac12-9b5c-430b-a01b-12b50d39521c/image',
  },
  {
    id: '26b347aa-b8c0-4539-b061-87c8a6472d04',
    name: 'Ocean Pkwy @ Kings Hwy',
    latitude: 40.605697,
    longitude: -73.966819,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/26b347aa-b8c0-4539-b061-87c8a6472d04/image',
  },
  {
    id: '8ccc0c64-65a5-42f9-9eba-cf7aa4a51b09',
    name: 'Belt Pkwy @ Cross Island Split',
    latitude: 40.6828835959178,
    longitude: -73.7264585494995,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/8ccc0c64-65a5-42f9-9eba-cf7aa4a51b09/image',
  },
  {
    id: '8437bc26-9eb8-4915-93f7-f8ea4170e739',
    name: '9 AVE @ 14 St',
    latitude: 40.74095,
    longitude: -74.0053,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/8437bc26-9eb8-4915-93f7-f8ea4170e739/image',
  },
  {
    id: 'c531c196-3944-4318-8c33-92eb2be792ac',
    name: 'Roosevelt Ave @ Baxter Ave',
    latitude: 40.74778,
    longitude: -73.882616,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/c531c196-3944-4318-8c33-92eb2be792ac/image',
  },
  {
    id: '97315cc7-688a-4139-93de-4c58c59fbede',
    name: 'Staten Island Expy @ West Shore Expy',
    latitude: 40.62124,
    longitude: -74.168972,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/97315cc7-688a-4139-93de-4c58c59fbede/image',
  },
  {
    id: 'cbd86999-5bb1-4f2d-addd-dbf15fa3609d',
    name: 'Boston Rd @ Gun hill Rd',
    latitude: 40.873347,
    longitude: -73.853317,
    area: 'Bronx',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/cbd86999-5bb1-4f2d-addd-dbf15fa3609d/image',
  },
  {
    id: '30604875-9021-4c50-a9d7-229ac4353be5',
    name: 'Lexington Ave @ 86 St',
    latitude: 40.77962,
    longitude: -73.9556,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/30604875-9021-4c50-a9d7-229ac4353be5/image',
  },
  {
    id: '5adef8a1-5ad0-4a73-8d87-e1e545ba8cbb',
    name: 'FDR Dr @ 73 St',
    latitude: 40.766599,
    longitude: -73.950845,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/5adef8a1-5ad0-4a73-8d87-e1e545ba8cbb/image',
  },
  {
    id: '5bd248b9-1dab-4118-b4b2-d3ef3fbd7085',
    name: 'Adams St @ Tillary St',
    latitude: 40.696346,
    longitude: -73.988845,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/5bd248b9-1dab-4118-b4b2-d3ef3fbd7085/image',
  },
  {
    id: 'c61490de-9ab7-4321-919c-cf8ad9ca5100',
    name: '2 Ave @ 59 St (QBB)',
    latitude: 40.760978,
    longitude: -73.964082,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/c61490de-9ab7-4321-919c-cf8ad9ca5100/image',
  },
  {
    id: 'cd52aa01-1d36-4d0a-bf03-79cb78ffadae',
    name: 'Sands St @ Jay St - quad - 149.27',
    latitude: 40.699972,
    longitude: -73.986858,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/cd52aa01-1d36-4d0a-bf03-79cb78ffadae/image',
  },
  {
    id: '10299e9d-efa0-4b1c-8b25-ce6e1657bc1b',
    name: 'C2-GE-06-WB_at_63rd_St',
    latitude: 40.64076393,
    longitude: -74.02182574,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/10299e9d-efa0-4b1c-8b25-ce6e1657bc1b/image',
  },
  {
    id: 'a3c04155-329d-4a9e-8dbf-e33a6d5aa045',
    name: 'Rt. 9A @ Morris South - 104.104:80',
    latitude: 40.706626,
    longitude: -74.015902,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/a3c04155-329d-4a9e-8dbf-e33a6d5aa045/image',
  },
  {
    id: 'cbd7c7a6-9bc5-4d6d-baf4-61b648dd589d',
    name: 'Astoria Blvd N S/R @ 32 St',
    latitude: 40.770472,
    longitude: -73.916515,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/cbd7c7a6-9bc5-4d6d-baf4-61b648dd589d/image',
  },
  {
    id: '90361876-3521-4aa4-a924-701716d5d506',
    name: 'C2-GE-01-WB_at_92nd_St-Vrrazano_Br',
    latitude: 40.6163,
    longitude: -74.026827,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/90361876-3521-4aa4-a924-701716d5d506/image',
  },
  {
    id: 'd872e1a0-8c5f-47da-9469-bf40a3673ade',
    name: 'BQE @ Queens Blvd',
    latitude: 40.738762,
    longitude: -73.901557,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/d872e1a0-8c5f-47da-9469-bf40a3673ade/image',
  },
  {
    id: 'f51e9c5b-2698-4777-a6be-1e1994b334c2',
    name: 'Victory Blvd @ Morani St-131.26',
    latitude: 40.608,
    longitude: -74.1575,
    area: 'Staten Island',
    isOnline: 'false',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/f51e9c5b-2698-4777-a6be-1e1994b334c2/image',
  },
  {
    id: 'e49e8537-9891-44ba-ac1f-41db307934cf',
    name: 'Flatbush Ave @ Utica Ave',
    latitude: 40.613168,
    longitude: -73.926315,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/e49e8537-9891-44ba-ac1f-41db307934cf/image',
  },
  {
    id: 'db8c2d21-00cd-4508-945d-38fcd92367d2',
    name: '3 Ave @ Prospect Ave',
    latitude: 40.66677243,
    longitude: -73.99483353,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/db8c2d21-00cd-4508-945d-38fcd92367d2/image',
  },
  {
    id: 'e4800abb-4eac-414e-b47e-5dd773bf0b90',
    name: 'Richmond Ave @ Forest Hills Rd',
    latitude: 40.57093,
    longitude: -74.169764,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/e4800abb-4eac-414e-b47e-5dd773bf0b90/image',
  },
  {
    id: '03d9fe0d-7c26-4929-a350-ab0a58a430c6',
    name: '5 Ave @ 72 St',
    latitude: 40.7715393676332,
    longitude: -73.9669132232666,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/03d9fe0d-7c26-4929-a350-ab0a58a430c6/image',
  },
  {
    id: '4bb3c648-45f8-4134-9ac8-fb56f2f851fa',
    name: 'West Shore Expy @ Rossville Ave',
    latitude: 40.554668,
    longitude: -74.213079,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/4bb3c648-45f8-4134-9ac8-fb56f2f851fa/image',
  },
  {
    id: 'f134b133-75ef-40a8-8fbb-f9c51355e6b5',
    name: 'Old Fulton St @ Vine St/Hicks St - quad - 156.24',
    latitude: 40.701936,
    longitude: -73.992574,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/f134b133-75ef-40a8-8fbb-f9c51355e6b5/image',
  },
  {
    id: '10a4be9a-8a1e-4b0c-84c3-b51c887b5e27',
    name: 'Northern Blvd @ 48 St',
    latitude: 40.753647,
    longitude: -73.914468,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/10a4be9a-8a1e-4b0c-84c3-b51c887b5e27/image',
  },
  {
    id: '23cb2c44-1a40-4950-a914-ee7f1390553c',
    name: 'West Shore Expy @ Arden Ave',
    latitude: 40.5597539508553,
    longitude: -74.1993856430053,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/23cb2c44-1a40-4950-a914-ee7f1390553c/image',
  },
  {
    id: '04589f46-2429-4e26-ad46-12a1198e9a9c',
    name: '6 Ave @ West Houston St',
    latitude: 40.728348,
    longitude: -74.002878,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/04589f46-2429-4e26-ad46-12a1198e9a9c/image',
  },
  {
    id: 'f2326b69-830d-4d1b-9cbc-a678823315c5',
    name: 'Seagirt Blvd @ B 9 St',
    latitude: 40.596501,
    longitude: -73.744193,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/f2326b69-830d-4d1b-9cbc-a678823315c5/image',
  },
  {
    id: 'd4338b6b-ddf6-41e9-9a64-1f0dd0b8ebdf',
    name: 'Boston Rd. @ E 169 St',
    latitude: 40.831378,
    longitude: -73.900286,
    area: 'Bronx',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/d4338b6b-ddf6-41e9-9a64-1f0dd0b8ebdf/image',
  },
  {
    id: 'f1912436-d91e-407e-b4a3-d163090f226f',
    name: 'Prospect St @ Old Fulton St -156.63',
    latitude: 40.700815,
    longitude: -73.99039,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/f1912436-d91e-407e-b4a3-d163090f226f/image',
  },
  {
    id: '836186cd-6fba-49d3-86ec-df4973fbae5e',
    name: 'Lexington Ave @ 76 St',
    latitude: 40.77304,
    longitude: -73.9603,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/836186cd-6fba-49d3-86ec-df4973fbae5e/image',
  },
  {
    id: 'fb588f5e-c90e-4136-9817-ed4201267d97',
    name: 'C1-MDE-14-NB_at_Mosholu_Pkwy-Ex12',
    latitude: 40.889129,
    longitude: -73.888492,
    area: 'Bronx',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/fb588f5e-c90e-4136-9817-ed4201267d97/image',
  },
  {
    id: '5bcf06f4-dbf0-4c7b-b6f3-241aea4e92c6',
    name: 'Hempstead Ave @ Springfield Ave',
    latitude: 40.713306,
    longitude: -73.735855,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/5bcf06f4-dbf0-4c7b-b6f3-241aea4e92c6/image',
  },
  {
    id: 'd9cd00ff-9b8e-492f-8b02-db27b6cf847c',
    name: 'BB - Ramp from Pearl St - 156.104',
    latitude: 40.710974,
    longitude: -74.003631,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/d9cd00ff-9b8e-492f-8b02-db27b6cf847c/image',
  },
  {
    id: '482e6d35-2a67-4bbf-b36f-fdf7e031d607',
    name: '5 AVE @ 50 St',
    latitude: 40.75856,
    longitude: -73.9772,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/482e6d35-2a67-4bbf-b36f-fdf7e031d607/image',
  },
  {
    id: '7014e990-19e3-4ed3-b175-7708374037e5',
    name: 'QBB SUR @ Vernon Blvd',
    latitude: 40.75453,
    longitude: -73.9491,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/7014e990-19e3-4ed3-b175-7708374037e5/image',
  },
  {
    id: 'c2b6f1ab-8baa-4384-9dc9-5bd2e374701e',
    name: 'FDR Dr @ 155 Street',
    latitude: 40.8282,
    longitude: -73.9351,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/c2b6f1ab-8baa-4384-9dc9-5bd2e374701e/image',
  },
  {
    id: '66bcf232-3abf-4afc-951c-469e9e6cfd70',
    name: 'Hempstead Ave @ Cross Island Pkwy (Quad)',
    latitude: 40.710893,
    longitude: -73.727435,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/66bcf232-3abf-4afc-951c-469e9e6cfd70/image',
  },
  {
    id: '214340ac-8243-4820-b924-f36caff361e2',
    name: '2 Ave @ 36 St-Midtown Tunnel',
    latitude: 40.7460850794673,
    longitude: -73.9749605630373,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/214340ac-8243-4820-b924-f36caff361e2/image',
  },
  {
    id: '4d39d6d1-a009-480f-9851-2571a5df1174',
    name: 'Amsterdam Ave @ 181 St',
    latitude: 40.84833,
    longitude: -73.930868,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/4d39d6d1-a009-480f-9851-2571a5df1174/image',
  },
  {
    id: 'f9cb9d4c-10ad-42e4-8997-dbc9e12bd55a',
    name: 'E 14 St @ Irving Pl/Lexington Av',
    latitude: 40.733978,
    longitude: -73.9888,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/f9cb9d4c-10ad-42e4-8997-dbc9e12bd55a/image',
  },
  {
    id: 'f6799b6f-b7f9-451b-8c7a-eacc9e8c36a8',
    name: 'Lenox Ave @ 135 St',
    latitude: 40.8133220296218,
    longitude: -73.9406061172485,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/f6799b6f-b7f9-451b-8c7a-eacc9e8c36a8/image',
  },
  {
    id: '10c5f42d-6b32-4533-9c35-5715af4e4c76',
    name: '3 Ave @ E 86 St',
    latitude: 40.778737,
    longitude: -73.953921,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/10c5f42d-6b32-4533-9c35-5715af4e4c76/image',
  },
  {
    id: '38c07664-0329-471e-997f-6a9015a5bcef',
    name: '1 Ave @ 124 St',
    latitude: 40.8004261441693,
    longitude: -73.9315509796142,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/38c07664-0329-471e-997f-6a9015a5bcef/image',
  },
  {
    id: 'ebd920f9-8522-4ae7-af8f-b887256fdaa1',
    name: 'Amboy Rd @ Annadale Rd',
    latitude: 40.536195,
    longitude: -74.180516,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/ebd920f9-8522-4ae7-af8f-b887256fdaa1/image',
  },
  {
    id: '69cc3528-455a-47a5-85c5-6f6a954d45f6',
    name: 'Woodhaven Blvd @ Hoffman Dr',
    latitude: 40.733178,
    longitude: -73.870783,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/69cc3528-455a-47a5-85c5-6f6a954d45f6/image',
  },
  {
    id: 'ebc0f1c7-1cc2-46c0-b8bd-365f94f09a0a',
    name: 'Guy Brewer Blvd @ N Conduit Ave',
    latitude: 40.667978,
    longitude: -73.771617,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/ebc0f1c7-1cc2-46c0-b8bd-365f94f09a0a/image',
  },
  {
    id: 'e6ba1d11-d27e-441f-b385-a8ae85a3fc74',
    name: 'Northern Blvd @ Union St',
    latitude: 40.763955,
    longitude: -73.828126,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/e6ba1d11-d27e-441f-b385-a8ae85a3fc74/image',
  },
  {
    id: '5c258011-2fa1-4b50-96c9-738ec3cf678c',
    name: 'C5-GCP-13-EB_at_72nd_Rd-Ex11',
    latitude: 40.721099,
    longitude: -73.835199,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/5c258011-2fa1-4b50-96c9-738ec3cf678c/image',
  },
  {
    id: 'ca545979-d0c1-4735-88d6-61b6311bb6bc',
    name: 'Henry Hudson Pkwy @ 125 St',
    latitude: 40.818617,
    longitude: -73.96099,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/ca545979-d0c1-4735-88d6-61b6311bb6bc/image',
  },
  {
    id: '3c39ff3e-a81c-4f92-9a96-7861aa244fda',
    name: 'BB-43 North Rdwy @ Center Expansion Jt',
    latitude: 40.705626,
    longitude: -73.9962,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/3c39ff3e-a81c-4f92-9a96-7861aa244fda/image',
  },
  {
    id: '316320b7-ff9c-44d4-b135-c780ee698eeb',
    name: 'Long Island Expy @ Exit 29',
    latitude: 40.750793,
    longitude: -73.750526,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/316320b7-ff9c-44d4-b135-c780ee698eeb/image',
  },
  {
    id: 'f75d3433-3ee8-4406-b747-ca47098debd9',
    name: 'Stillwell Ave @ 86 St',
    latitude: 40.596706,
    longitude: -73.985239,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/f75d3433-3ee8-4406-b747-ca47098debd9/image',
  },
  {
    id: '023cc794-4600-4c02-91e7-4603597172e1',
    name: 'Wythe Ave @ Williamsburg st w',
    latitude: 40.701667,
    longitude: -73.961476,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/023cc794-4600-4c02-91e7-4603597172e1/image',
  },
  {
    id: 'b1f2ef94-28b2-4ec6-9e0b-1f938e8c65d0',
    name: 'C5-GCP-11_EB_at_64th_Ave-Ex10',
    latitude: 40.734074,
    longitude: -73.844484,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/b1f2ef94-28b2-4ec6-9e0b-1f938e8c65d0/image',
  },
  {
    id: '9a44eb83-317e-4d83-8f0d-e753316c537e',
    name: 'QBB LL CM @ E Channel',
    latitude: 40.757631,
    longitude: -73.956358,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/9a44eb83-317e-4d83-8f0d-e753316c537e/image',
  },
  {
    id: '45cb119b-0e4a-442e-9410-b810ab8c255d',
    name: '7 Ave @ 43 St',
    latitude: 40.756691,
    longitude: -73.986476,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/45cb119b-0e4a-442e-9410-b810ab8c255d/image',
  },
  {
    id: '311a7ce2-4648-45f7-8b69-32709361adb7',
    name: '1 Ave @ 96 St',
    latitude: 40.783304,
    longitude: -73.944662,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/311a7ce2-4648-45f7-8b69-32709361adb7/image',
  },
  {
    id: 'e2a52948-46af-41f0-9769-623e4a7d2900',
    name: 'C2-BQE-06_WB_at_Congress_St-Ex27',
    latitude: 40.689202,
    longitude: -73.999062,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/e2a52948-46af-41f0-9769-623e4a7d2900/image',
  },
  {
    id: '4d92ff93-b8cd-4bec-a70b-91b4cfb75857',
    name: 'C3-MLK-03_NB_at_Walkr_St-Bayonne_Br',
    latitude: 40.630779,
    longitude: -74.145543,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/4d92ff93-b8cd-4bec-a70b-91b4cfb75857/image',
  },
  {
    id: '28880add-7b37-4d5f-8414-ad32aaab6c13',
    name: 'Beach Channel Dr @B 101 St',
    latitude: 40.585808,
    longitude: -73.823158,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/28880add-7b37-4d5f-8414-ad32aaab6c13/image',
  },
  {
    id: '1a64aa06-3f40-4f0e-b752-09ec44415ac0',
    name: 'C5-VWE-25-NB_at_GCP-Intr.-Ex14',
    latitude: 40.715955,
    longitude: -73.8263,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/1a64aa06-3f40-4f0e-b752-09ec44415ac0/image',
  },
  {
    id: '5ec4ce2f-d86d-4899-b464-436fdcde72eb',
    name: 'C3-SIE-09-EB_at_ Manor_Rd',
    latitude: 40.610089,
    longitude: -74.105929,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/5ec4ce2f-d86d-4899-b464-436fdcde72eb/image',
  },
  {
    id: 'e86cf7d8-0782-40d7-885c-f4a9218988d9',
    name: 'Belt Pkwy @ 68 St',
    latitude: 40.639889,
    longitude: -74.036124,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/e86cf7d8-0782-40d7-885c-f4a9218988d9/image',
  },
  {
    id: '81db80c2-13fe-4ae7-8b47-c08aa42d512f',
    name: '5 Ave @ 66 St',
    latitude: 40.768651,
    longitude: -73.969814,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/81db80c2-13fe-4ae7-8b47-c08aa42d512f/image',
  },
  {
    id: '78a5c61d-9dce-4b52-b0da-bf7d22c1f501',
    name: '8 Ave @ Columbus Cr South',
    latitude: 40.766969,
    longitude: -73.982265,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/78a5c61d-9dce-4b52-b0da-bf7d22c1f501/image',
  },
  {
    id: 'c733e881-862d-4874-9d00-9bfdc3b27cbc',
    name: 'Grand St @ Bowery',
    latitude: 40.718427,
    longitude: -73.99483,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/c733e881-862d-4874-9d00-9bfdc3b27cbc/image',
  },
  {
    id: 'a2a2f56a-7e69-4423-a014-e9503c8f97a4',
    name: 'Rockaway Blvd @ Farmers Blvd',
    latitude: 40.659656,
    longitude: -73.773968,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/a2a2f56a-7e69-4423-a014-e9503c8f97a4/image',
  },
  {
    id: '5bb6d7d8-39ce-43b8-b539-376fbcf73927',
    name: '3 Ave @ 49 St',
    latitude: 40.7552116061846,
    longitude: -73.9712421172846,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/5bb6d7d8-39ce-43b8-b539-376fbcf73927/image',
  },
  {
    id: 'a1295144-6d4b-4e63-8475-a4fff6020e53',
    name: 'C3-SIE-07-EB_at_Woolley_Ave-Ex10',
    latitude: 40.607476,
    longitude: -74.140649,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/a1295144-6d4b-4e63-8475-a4fff6020e53/image',
  },
  {
    id: '97ace0b4-fcd2-4c3a-8c05-dbf73639ead3',
    name: 'Crescent st @ 39 Ave',
    latitude: 40.7547,
    longitude: -73.93678,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/97ace0b4-fcd2-4c3a-8c05-dbf73639ead3/image',
  },
  {
    id: '097a7d75-1c6f-4817-aa34-1de4bb9202f4',
    name: 'MHB-23 Manh LRDWY @ Twr',
    latitude: 40.708814,
    longitude: -73.991511,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/097a7d75-1c6f-4817-aa34-1de4bb9202f4/image',
  },
  {
    id: 'e348f285-d668-44a0-9d45-b3006f4ced6b',
    name: 'Victory Blvd @ Jersey St',
    latitude: 40.635735,
    longitude: -74.083777,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/e348f285-d668-44a0-9d45-b3006f4ced6b/image',
  },
  {
    id: '786650de-d254-47dc-aa8a-de9a4c231a2a',
    name: '2 Ave @ 23 St',
    latitude: 40.737876,
    longitude: -73.980926,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/786650de-d254-47dc-aa8a-de9a4c231a2a/image',
  },
  {
    id: 'fb34b9cf-f64d-4645-96f6-bd0243dffda0',
    name: 'Cross Island Pkwy @ West Alley Rd',
    latitude: 40.751127,
    longitude: -73.742662,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/fb34b9cf-f64d-4645-96f6-bd0243dffda0/image',
  },
  {
    id: '62b3062d-542f-40f1-86ec-206710e789b6',
    name: '3 Ave @ 57 St',
    latitude: 40.760252895987,
    longitude: -73.967542473241,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/62b3062d-542f-40f1-86ec-206710e789b6/image',
  },
  {
    id: 'bc01e999-cfba-409b-9542-19c7e86cf410',
    name: 'C3-WSE-05-NB_at_Arden_Ave-Ex4',
    latitude: 40.560473,
    longitude: -74.199158,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/bc01e999-cfba-409b-9542-19c7e86cf410/image',
  },
  {
    id: '8f692f55-8118-423b-8bcb-1ea49eaf442b',
    name: '2 Ave @ 42 St',
    latitude: 40.7498342023994,
    longitude: -73.9722170340956,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/8f692f55-8118-423b-8bcb-1ea49eaf442b/image',
  },
  {
    id: 'cde75072-a814-46b4-8785-765b314c43e8',
    name: 'Drumgoogle Rd E @ Jefferson Blvd',
    latitude: 40.544705,
    longitude: -74.18201,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/cde75072-a814-46b4-8785-765b314c43e8/image',
  },
  {
    id: '7cfc551d-403d-46a8-aa74-89f472b7136b',
    name: 'Broadway @ Battery pl',
    latitude: 40.70461,
    longitude: -74.0142,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/7cfc551d-403d-46a8-aa74-89f472b7136b/image',
  },
  {
    id: 'fa85ed07-ccc9-4dc7-97bd-fd55acc0a415',
    name: 'Grand Central Pkwy NSR @ 79 St',
    latitude: 40.76648,
    longitude: -73.89041,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/fa85ed07-ccc9-4dc7-97bd-fd55acc0a415/image',
  },
  {
    id: '8820f260-11c9-49dd-8839-0ff47707b6f2',
    name: 'Atlantic Ave @ Hicks Ave - quad - 165.203',
    latitude: 40.691006,
    longitude: -73.99784,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/8820f260-11c9-49dd-8839-0ff47707b6f2/image',
  },
  {
    id: '83b8713b-048f-47a5-a81a-75157e837a4c',
    name: '8th Ave @ 23 St',
    latitude: 40.7453108515355,
    longitude: -73.9984918259082,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/83b8713b-048f-47a5-a81a-75157e837a4c/image',
  },
  {
    id: 'b5a78bda-3ca9-4ad4-bd03-4cee70baba2d',
    name: '5 Ave @ 59 St',
    latitude: 40.764289,
    longitude: -73.973023,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/b5a78bda-3ca9-4ad4-bd03-4cee70baba2d/image',
  },
  {
    id: '2a0ec6ff-9284-466a-9785-9f6df84ea4cf',
    name: 'Fordham Rd @ Hughes Ave',
    latitude: 40.8575452886721,
    longitude: -73.8840866088867,
    area: 'Bronx',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/2a0ec6ff-9284-466a-9785-9f6df84ea4cf/image',
  },
  {
    id: 'a9b2501d-062f-43f8-9419-f89faa4f36ba',
    name: 'Riverside Dr @ Washington Br ENT ramp',
    latitude: 40.84337,
    longitude: -73.9444,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/a9b2501d-062f-43f8-9419-f89faa4f36ba/image',
  },
  {
    id: 'b5d8fe4f-1cf5-4cd8-8211-8353e68da1cb',
    name: 'Atlantic Ave @ Vanderbilt Ave',
    latitude: 40.6809634749315,
    longitude: -73.9670419692993,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/b5d8fe4f-1cf5-4cd8-8211-8353e68da1cb/image',
  },
  {
    id: '6029af32-7e3c-412f-804e-b34166300799',
    name: 'Pelham Pkwy @ Stillwell Ave',
    latitude: 40.856678,
    longitude: -73.836682,
    area: 'Bronx',
    isOnline: 'false',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/6029af32-7e3c-412f-804e-b34166300799/image',
  },
  {
    id: 'ffae5a99-c403-41aa-9985-0633aee4aeff',
    name: 'Henry Hudson pkwy @ Exit 14 ,165 St/ GWB  ramp',
    latitude: 40.84148,
    longitude: -73.9455,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/ffae5a99-c403-41aa-9985-0633aee4aeff/image',
  },
  {
    id: '254bc881-6584-4510-9faa-11623c370110',
    name: 'C5-BQE-34-WB_at_58th_Street',
    latitude: 40.736225,
    longitude: -73.911363,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/254bc881-6584-4510-9faa-11623c370110/image',
  },
  {
    id: '1d799f04-00cb-4ac7-a8bb-f090b750dee1',
    name: 'Victory Blvd @ Richmond Ave - quad - ptz - 130.146',
    latitude: 40.60728,
    longitude: -74.16261,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/1d799f04-00cb-4ac7-a8bb-f090b750dee1/image',
  },
  {
    id: 'ee4709ba-ce23-4f26-a970-02e5ce9cf7f2',
    name: 'College Point Blvd @ Booth Memorial Ave',
    latitude: 40.747994,
    longitude: -73.833113,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/ee4709ba-ce23-4f26-a970-02e5ce9cf7f2/image',
  },
  {
    id: 'cdfc2dbe-7ce3-4775-ab7a-8440a9828358',
    name: 'Worth Street @ Bowery',
    latitude: 40.713578,
    longitude: -73.998542,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/cdfc2dbe-7ce3-4775-ab7a-8440a9828358/image',
  },
  {
    id: 'ba3d9734-3871-4d49-b46b-88d88dd96e71',
    name: 'AVE C @ 23 St',
    latitude: 40.73545,
    longitude: -73.9751,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/ba3d9734-3871-4d49-b46b-88d88dd96e71/image',
  },
  {
    id: 'bf8404ae-6ab7-47a1-8b3e-2f57f537a71f',
    name: '5 Ave @ 96 St',
    latitude: 40.787916,
    longitude: -73.955752,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/bf8404ae-6ab7-47a1-8b3e-2f57f537a71f/image',
  },
  {
    id: 'aa85b894-336d-42bb-9801-0359e452f845',
    name: '1 Ave @ 62 St',
    latitude: 40.761501,
    longitude: -73.960542,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/aa85b894-336d-42bb-9801-0359e452f845/image',
  },
  {
    id: 'ee1b1d85-e8ce-485f-a539-12962933eb9f',
    name: '7 Ave @ 34 St',
    latitude: 40.7510195668227,
    longitude: -73.9906285955498,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/ee1b1d85-e8ce-485f-a539-12962933eb9f/image',
  },
  {
    id: '3546896d-d4c6-4966-8a43-2fe62e26526f',
    name: 'E 8 St @ Lafayette St',
    latitude: 40.730175,
    longitude: -73.991076,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/3546896d-d4c6-4966-8a43-2fe62e26526f/image',
  },
  {
    id: 'b5cf34ce-697e-42a1-b22f-8eb2c1f3e79e',
    name: '1 Ave @ E. Houston St',
    latitude: 40.723043,
    longitude: -73.988592,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/b5cf34ce-697e-42a1-b22f-8eb2c1f3e79e/image',
  },
  {
    id: '7a0d9e49-875c-4c25-a92b-3d239de40d43',
    name: 'Old Fulton St @ Prospect St',
    latitude: 40.700757,
    longitude: -73.991042,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/7a0d9e49-875c-4c25-a92b-3d239de40d43/image',
  },
  {
    id: '4e2e7884-72f7-4068-b9c3-95ce5e071f34',
    name: 'C2-BQE-15-WB_at_Adams_St-Ex28B',
    latitude: 40.701517,
    longitude: -73.988836,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/4e2e7884-72f7-4068-b9c3-95ce5e071f34/image',
  },
  {
    id: '680f6950-8ae6-4746-b8ce-4bc28f10f79d',
    name: 'C2-GE-02-WB_at_Ft_Hmiltn_Pkwy-Ex19',
    latitude: 40.621403,
    longitude: -74.022062,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/680f6950-8ae6-4746-b8ce-4bc28f10f79d/image',
  },
  {
    id: 'a4c12003-9638-473d-bfe3-dddf509c80b8',
    name: '6 Ave @ 58 St',
    latitude: 40.7642913321744,
    longitude: -73.9765262603759,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/a4c12003-9638-473d-bfe3-dddf509c80b8/image',
  },
  {
    id: '4678c08d-9b89-4dd4-9fa0-234412822bb7',
    name: 'C3-MLK-02-NB_at_Forest_Ave-Ex11',
    latitude: 40.624655,
    longitude: -74.146146,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/4678c08d-9b89-4dd4-9fa0-234412822bb7/image',
  },
  {
    id: 'd019c28c-80f5-490b-8a35-198477ac3fb0',
    name: 'Woodhaven Blvd @ Dry Harbor Rd',
    latitude: 40.727879,
    longitude: -73.870974,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/d019c28c-80f5-490b-8a35-198477ac3fb0/image',
  },
  {
    id: '2e0d5197-6073-411f-9d1a-326b30841679',
    name: 'Flushing Ave @ Williamsburg W St',
    latitude: 40.69810439,
    longitude: -73.9628506,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/2e0d5197-6073-411f-9d1a-326b30841679/image',
  },
  {
    id: '86d418ab-10bc-4b73-a283-153abffabb0f',
    name: 'West st and West Thames (Battery tunnel)',
    latitude: 40.70769,
    longitude: -74.01565,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/86d418ab-10bc-4b73-a283-153abffabb0f/image',
  },
  {
    id: 'a3e3dced-4224-4e06-ab98-a6018cf10667',
    name: 'Belt Pkwy @ Springfield Blvd',
    latitude: 40.6652749911298,
    longitude: -73.7575721740722,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/a3e3dced-4224-4e06-ab98-a6018cf10667/image',
  },
  {
    id: '0f3b6031-fe36-43df-b2c7-6120e0580309',
    name: 'Brooklyn Bridge - Ped Walk Way',
    latitude: 40.709046,
    longitude: -74.000735,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/0f3b6031-fe36-43df-b2c7-6120e0580309/image',
  },
  {
    id: '856ef0b2-123d-4211-9619-1334fb7ac219',
    name: 'Ocean Pkwy @ Surf Av @ Sea Breeze Ave',
    latitude: 40.575219,
    longitude: -73.968764,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/856ef0b2-123d-4211-9619-1334fb7ac219/image',
  },
  {
    id: 'a0ecf291-582c-4c42-933f-0b9ed4ce885c',
    name: 'Queens Plaza N @ Northern Blvd',
    latitude: 40.750323,
    longitude: -73.938321,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/a0ecf291-582c-4c42-933f-0b9ed4ce885c/image',
  },
  {
    id: '25ad72fe-e74c-49af-b4c0-34c9eac14655',
    name: 'Holland Tunnel',
    latitude: 40.725925,
    longitude: -74.009506,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/25ad72fe-e74c-49af-b4c0-34c9eac14655/image',
  },
  {
    id: '48cd1b5b-f361-4683-9d83-492d4789d7ea',
    name: 'Grand St @ Allen St',
    latitude: 40.717382,
    longitude: -73.991308,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/48cd1b5b-f361-4683-9d83-492d4789d7ea/image',
  },
  {
    id: 'b9085289-750b-403a-8031-681678d35ae0',
    name: 'Flushing Ave @ Fresh Pond Rd',
    latitude: 40.721888,
    longitude: -73.903107,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/b9085289-750b-403a-8031-681678d35ae0/image',
  },
  {
    id: 'a67d1358-ca36-4f9a-a432-056361f7c904',
    name: 'Hylan Blvd @ Seaview Ave',
    latitude: 40.586632,
    longitude: -74.091912,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/a67d1358-ca36-4f9a-a432-056361f7c904/image',
  },
  {
    id: '1e627100-9bce-4e78-bcd3-736344a2236c',
    name: 'FDR Dr @ Brooklyn Bridge Exit NB',
    latitude: 40.708446,
    longitude: -73.998459,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/1e627100-9bce-4e78-bcd3-736344a2236c/image',
  },
  {
    id: 'a7ec2d01-26b2-4974-b036-42df031ba134',
    name: 'E 149 St @ River Ave',
    latitude: 40.819285,
    longitude: -73.930094,
    area: 'Bronx',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/a7ec2d01-26b2-4974-b036-42df031ba134/image',
  },
  {
    id: 'dbbf45f6-7d87-46fa-825f-454a7e2bbcad',
    name: 'Broadway @ 46 St- Quad East',
    latitude: 40.7587,
    longitude: -73.985348,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/dbbf45f6-7d87-46fa-825f-454a7e2bbcad/image',
  },
  {
    id: '6fc602cf-72c5-40cc-9a42-9a844de7bc1a',
    name: 'Grand St @ Essex St',
    latitude: 40.7167229317414,
    longitude: -73.9891582366234,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/6fc602cf-72c5-40cc-9a42-9a844de7bc1a/image',
  },
  {
    id: 'c5af3e42-bb95-4aa3-a9d1-2d8071412dab',
    name: 'Jackson Ave @ Thomson Ave',
    latitude: 40.746761,
    longitude: -73.943262,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/c5af3e42-bb95-4aa3-a9d1-2d8071412dab/image',
  },
  {
    id: '5361a6ea-95fe-44e1-99f8-dc7d6964a427',
    name: 'Flatbush Ave @ Concord St',
    latitude: 40.697565,
    longitude: -73.985248,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/5361a6ea-95fe-44e1-99f8-dc7d6964a427/image',
  },
  {
    id: '4d84b5d0-c9da-4916-8b0d-4f3d573d3509',
    name: 'Old Fulton @ Vine St @ Hicks St',
    latitude: 40.701936,
    longitude: -73.992574,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/4d84b5d0-c9da-4916-8b0d-4f3d573d3509/image',
  },
  {
    id: 'd24b0435-67e7-498a-91f6-f3a65bd86be2',
    name: 'Bruckner Expy @ Wilkinson Ave',
    latitude: 40.851659,
    longitude: -73.826704,
    area: 'Bronx',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/d24b0435-67e7-498a-91f6-f3a65bd86be2/image',
  },
  {
    id: 'fcfbaa3d-13e5-4687-9688-ae1eab37c723',
    name: '7 Ave @ 23St',
    latitude: 40.7441114245984,
    longitude: -73.9956503622239,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/fcfbaa3d-13e5-4687-9688-ae1eab37c723/image',
  },
  {
    id: '02ac2943-68f1-478d-b8d5-148a97e77e27',
    name: 'C3-KWV-01-NB_at_Tyrllan_Ave-Outrbr',
    latitude: 40.525433,
    longitude: -74.230189,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/02ac2943-68f1-478d-b8d5-148a97e77e27/image',
  },
  {
    id: '08c57946-9560-49b9-97a5-43dc5b74fd86',
    name: 'Cadman Plz E/Washington St @ Prospect St',
    latitude: 40.700743,
    longitude: -73.989736,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/08c57946-9560-49b9-97a5-43dc5b74fd86/image',
  },
  {
    id: '7d1db29e-90a9-4027-b1fc-6e6af4f4f0d9',
    name: 'Narrow Rd N @ Richmond Rd',
    latitude: 40.609433,
    longitude: -74.090081,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/7d1db29e-90a9-4027-b1fc-6e6af4f4f0d9/image',
  },
  {
    id: '557af346-2f9f-4306-8388-3974b7a49e4d',
    name: 'Crescent st @ 41 Ave',
    latitude: 40.75224,
    longitude: -73.9391,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/557af346-2f9f-4306-8388-3974b7a49e4d/image',
  },
  {
    id: '368290bb-cebf-4845-8644-92382dcccd96',
    name: 'WBB SIR -2 @ Manhattan Mid Span',
    latitude: 40.714325,
    longitude: -73.9748335,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/368290bb-cebf-4845-8644-92382dcccd96/image',
  },
  {
    id: 'd7ee32d6-895f-4e37-bdd9-f97b06b24f3d',
    name: 'Tillary St @ Jay St',
    latitude: 40.6960734,
    longitude: -73.98709473,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/d7ee32d6-895f-4e37-bdd9-f97b06b24f3d/image',
  },
  {
    id: 'e676b48b-e3ff-4f8f-9388-7d1206094f83',
    name: 'Belt Pkwy @ Brookville Blvd',
    latitude: 40.6652749911298,
    longitude: -73.7404060363769,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/e676b48b-e3ff-4f8f-9388-7d1206094f83/image',
  },
  {
    id: '247c548c-da8e-45fc-8183-6f82be28edee',
    name: 'Clearview Expy @ 35 St',
    latitude: 40.7665340823153,
    longitude: -73.7809610366821,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/247c548c-da8e-45fc-8183-6f82be28edee/image',
  },
  {
    id: 'd1363c77-e061-4414-be82-e6d749254859',
    name: 'Madison Ave @ 42 St',
    latitude: 40.7528121596316,
    longitude: -73.9792838595713,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/d1363c77-e061-4414-be82-e6d749254859/image',
  },
  {
    id: 'e5f14a79-fe4c-450e-b81e-21d8c9e1ea9b',
    name: 'Harlem Rvr Dr (FDR) @ 166 St',
    latitude: 40.836133,
    longitude: -73.934883,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/e5f14a79-fe4c-450e-b81e-21d8c9e1ea9b/image',
  },
  {
    id: '5aa32e02-77f7-436b-9887-fbb7a84a3489',
    name: 'Cross Island Expy @ 14 Ave',
    latitude: 40.7873652885455,
    longitude: -73.8159799575805,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/5aa32e02-77f7-436b-9887-fbb7a84a3489/image',
  },
  {
    id: 'bdf953a9-efb1-46d7-8e6d-04413de4f397',
    name: 'MHB-27 Bklyn N URDWY @ Twr',
    latitude: 40.705112,
    longitude: -73.989272,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/bdf953a9-efb1-46d7-8e6d-04413de4f397/image',
  },
  {
    id: 'd892897d-5a64-4450-9502-2e91b3ce5eea',
    name: 'QBB SOR @ Sutton Pl',
    latitude: 40.758904,
    longitude: -73.959539,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/d892897d-5a64-4450-9502-2e91b3ce5eea/image',
  },
  {
    id: 'a95f7916-24ee-4d7e-bc71-6f9f1e009f23',
    name: 'Grand Concourse @ 161 St',
    latitude: 40.826849,
    longitude: -73.922609,
    area: 'Bronx',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/a95f7916-24ee-4d7e-bc71-6f9f1e009f23/image',
  },
  {
    id: 'a8389158-7e9c-4e57-8127-841f710582f8',
    name: 'Linden Blvd @ Pennsylvania Ave',
    latitude: 40.658591,
    longitude: -73.890605,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/a8389158-7e9c-4e57-8127-841f710582f8/image',
  },
  {
    id: 'b19c9130-3a2d-4f7a-94a5-495eeea219ef',
    name: 'C1-BRE-11-SB_at_Buhre_Ave-Ex8A',
    latitude: 40.84897,
    longitude: -73.827533,
    area: 'Bronx',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/b19c9130-3a2d-4f7a-94a5-495eeea219ef/image',
  },
  {
    id: '8c4595b4-b1cd-4707-8fe8-3178c4ca93d1',
    name: 'Drumgoole Rd West @ Arthur Kill Rd - quad - ptz -141.59',
    latitude: 40.56147,
    longitude: -74.17178,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/8c4595b4-b1cd-4707-8fe8-3178c4ca93d1/image',
  },
  {
    id: '94f19b53-082f-4ee5-acc4-69494317ce51',
    name: '6 Ave @ 14 St',
    latitude: 40.7373767141055,
    longitude: -73.9968600672356,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/94f19b53-082f-4ee5-acc4-69494317ce51/image',
  },
  {
    id: 'fcc24aa5-4da0-48f2-aa43-e70e4677517c',
    name: '6 Ave @ 23 St',
    latitude: 40.7429025573452,
    longitude: -73.992797766009,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/fcc24aa5-4da0-48f2-aa43-e70e4677517c/image',
  },
  {
    id: 'a249b3ee-bde9-4d6d-9a18-9cd2108d2eb0',
    name: 'Allen St @ Delancey St (B)',
    latitude: 40.719108,
    longitude: -73.99043,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/a249b3ee-bde9-4d6d-9a18-9cd2108d2eb0/image',
  },
  {
    id: 'e85785e6-d889-4811-8ba5-2e389942431f',
    name: 'Kissena Blvd @ Sanford Ave',
    latitude: 40.757138,
    longitude: -73.827106,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/e85785e6-d889-4811-8ba5-2e389942431f/image',
  },
  {
    id: '7be9623c-4f70-4815-bc54-5f0411491b83',
    name: 'Narrows Rd South @ Fingerboard Rd',
    latitude: 40.603647,
    longitude: -74.069355,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/7be9623c-4f70-4815-bc54-5f0411491b83/image',
  },
  {
    id: 'ea36992f-a3bf-4cce-8942-05ff04e2ae5f',
    name: 'Park Ave @ 23 St',
    latitude: 40.7401886321935,
    longitude: -73.986363377929,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/ea36992f-a3bf-4cce-8942-05ff04e2ae5f/image',
  },
  {
    id: '2293205b-2b15-44da-8220-6833a13c5a80',
    name: 'Ocean Pkwy @ Church Ave',
    latitude: 40.644933,
    longitude: -73.974359,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/2293205b-2b15-44da-8220-6833a13c5a80/image',
  },
  {
    id: '7bbbaf2a-ca8d-4fa7-bcc9-bac5ac78d0b9',
    name: 'Cross Island Pkwy @ 113 Ave',
    latitude: 40.702317,
    longitude: -73.727481,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/7bbbaf2a-ca8d-4fa7-bcc9-bac5ac78d0b9/image',
  },
  {
    id: 'abb47d30-e011-47bc-ac00-622924bc5acd',
    name: 'Belt Pkwy @ Cropsey Ave',
    latitude: 40.584105,
    longitude: -73.986885,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/abb47d30-e011-47bc-ac00-622924bc5acd/image',
  },
  {
    id: '37e2a4b6-2fbd-42f5-9d2d-130b664783f2',
    name: '9 Ave @ 57 St',
    latitude: 40.7679306900999,
    longitude: -73.9857235137761,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/37e2a4b6-2fbd-42f5-9d2d-130b664783f2/image',
  },
  {
    id: '7b0f1486-6c0c-4bd4-ac8b-800c4bf2176e',
    name: 'Flushing Ave @ Navy St',
    latitude: 40.698327,
    longitude: -73.980586,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/7b0f1486-6c0c-4bd4-ac8b-800c4bf2176e/image',
  },
  {
    id: '789b70ea-f0f9-4e61-b72d-e4bf79fd2218',
    name: 'Cross Island Pkwy @ Clearview Expy',
    latitude: 40.786661,
    longitude: -73.793472,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/789b70ea-f0f9-4e61-b72d-e4bf79fd2218/image',
  },
  {
    id: '7d10cfbb-0465-4958-90fc-ddd5349d6635',
    name: 'West St @ Canal St',
    latitude: 40.7250797391189,
    longitude: -74.0104722976684,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/7d10cfbb-0465-4958-90fc-ddd5349d6635/image',
  },
  {
    id: 'ad3df063-d5d6-458c-84e7-1242060649cf',
    name: 'Ft Washington @ 179 St',
    latitude: 40.849349,
    longitude: -73.93894,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/ad3df063-d5d6-458c-84e7-1242060649cf/image',
  },
  {
    id: '62174b3a-f453-4108-9eb2-48d833528a7c',
    name: 'Springfield Blvd @ Merrick Blvd',
    latitude: 40.680209,
    longitude: -73.753356,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/62174b3a-f453-4108-9eb2-48d833528a7c/image',
  },
  {
    id: 'c3169415-bb26-4cea-8a12-36afd3e37f18',
    name: 'Cross Island Pkwy @ Braddock Ave ',
    latitude: 40.725456,
    longitude: -73.724261,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/c3169415-bb26-4cea-8a12-36afd3e37f18/image',
  },
  {
    id: '61890a52-c90e-41a1-b032-d5c6f39746d9',
    name: '7 Ave @ 145 St',
    latitude: 40.8207270979196,
    longitude: -73.9388036727905,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/61890a52-c90e-41a1-b032-d5c6f39746d9/image',
  },
  {
    id: 'd560faa5-0f60-4ac4-ae1e-b4af096d9adc',
    name: 'BB-16 South Rdwy @ Manhattan Anchorage',
    latitude: 40.708647,
    longitude: -73.999962,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/d560faa5-0f60-4ac4-ae1e-b4af096d9adc/image',
  },
  {
    id: '401c14c4-516f-48af-ad5d-fc36ddcff149',
    name: 'C5-VWE-28-SB_at_67th_Rd-Ex11',
    latitude: 40.733128,
    longitude: -73.835773,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/401c14c4-516f-48af-ad5d-fc36ddcff149/image',
  },
  {
    id: '9bf91436-9ea5-4451-aa9d-a309f8e26a0f',
    name: 'Roosevelt Ave @ 50 St',
    latitude: 40.743472,
    longitude: -73.914821,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/9bf91436-9ea5-4451-aa9d-a309f8e26a0f/image',
  },
  {
    id: 'bfcb2b32-7ae7-4060-a39b-80f71a1db289',
    name: 'QBB UL @ Queens Pier',
    latitude: 40.755254,
    longitude: -73.950939,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/bfcb2b32-7ae7-4060-a39b-80f71a1db289/image',
  },
  {
    id: '85837859-3e5d-4e1b-8740-1c2ea3ed5662',
    name: 'Broome St and Lafayette St',
    latitude: 40.721091,
    longitude: -73.998074,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/85837859-3e5d-4e1b-8740-1c2ea3ed5662/image',
  },
  {
    id: 'a654976f-34a5-46d3-a57d-efe949153f41',
    name: 'C1-MDE-02-NB_at_Willis_Ave-Ex2',
    latitude: 40.806729,
    longitude: -73.923727,
    area: 'Bronx',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/a654976f-34a5-46d3-a57d-efe949153f41/image',
  },
  {
    id: 'efc538d1-4711-4f6e-b81c-e555fc37d127',
    name: 'C3-WSE-06-NB_at_Muldoon_Ave-Ex5',
    latitude: 40.568875,
    longitude: -74.191035,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/efc538d1-4711-4f6e-b81c-e555fc37d127/image',
  },
  {
    id: 'dfed3e07-de07-4243-8a41-509a1800cd1e',
    name: 'Hamilton Ave @ 9 St',
    latitude: 40.675583,
    longitude: -74.00068,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/dfed3e07-de07-4243-8a41-509a1800cd1e/image',
  },
  {
    id: '7c92c63b-2786-4600-9108-62cea2806345',
    name: 'Grand Ave @ LIE',
    latitude: 40.725764,
    longitude: -73.895635,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/7c92c63b-2786-4600-9108-62cea2806345/image',
  },
  {
    id: 'b678c72f-c8cf-48dc-b97b-42c5bf3abd7b',
    name: 'MHB-24 Manh S URDWY @ Twr',
    latitude: 40.708773,
    longitude: -73.991612,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/b678c72f-c8cf-48dc-b97b-42c5bf3abd7b/image',
  },
  {
    id: '74fcddb5-5030-4be4-864c-e315e58b86f4',
    name: 'Long Island Expy @ Douglaston Pkwy',
    latitude: 40.75692,
    longitude: -73.73928,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/74fcddb5-5030-4be4-864c-e315e58b86f4/image',
  },
  {
    id: '1c6033e3-3872-41ce-9fc2-12fbddcfd7e6',
    name: 'Hylan Blvd @ Midland Ave',
    latitude: 40.577965,
    longitude: -74.102264,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/1c6033e3-3872-41ce-9fc2-12fbddcfd7e6/image',
  },
  {
    id: 'cb94f806-6014-496b-960b-9f747109980e',
    name: 'Rockaway Blvd @ Brookville Blvd',
    latitude: 40.640648,
    longitude: -73.743377,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/cb94f806-6014-496b-960b-9f747109980e/image',
  },
  {
    id: 'e3977c52-9915-412d-9cef-96fc1c92b6aa',
    name: 'Macombs Dam Bridge @ E 161 St',
    latitude: 40.829275,
    longitude: -73.928693,
    area: 'Bronx',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/e3977c52-9915-412d-9cef-96fc1c92b6aa/image',
  },
  {
    id: '7033b4d2-13e5-4405-ab86-da33c12734c3',
    name: 'BQE E/B Ent. Ramp @ Broadway',
    latitude: 40.748641,
    longitude: -73.895892,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/7033b4d2-13e5-4405-ab86-da33c12734c3/image',
  },
  {
    id: '6bfee8ce-9d91-4ffb-9586-9b3a0675578d',
    name: 'Northern Blvd @ Steinway',
    latitude: 40.752466,
    longitude: -73.924313,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/6bfee8ce-9d91-4ffb-9586-9b3a0675578d/image',
  },
  {
    id: 'c217a64e-95c3-4442-96d1-7a6c177615d7',
    name: 'CPW @ 110 St',
    latitude: 40.800325,
    longitude: -73.958392,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/c217a64e-95c3-4442-96d1-7a6c177615d7/image',
  },
  {
    id: '90775fd8-1c70-42f1-aee1-594db85be7ba',
    name: 'Clearview Expy @ 26th Ave',
    latitude: 40.775439328607,
    longitude: -73.7841796875,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/90775fd8-1c70-42f1-aee1-594db85be7ba/image',
  },
  {
    id: '6a5f91d8-042f-4678-a722-2c3c560dedf2',
    name: 'Wythe Ave @ North 12 St',
    latitude: 40.72231,
    longitude: -73.957447,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/6a5f91d8-042f-4678-a722-2c3c560dedf2/image',
  },
  {
    id: 'dd374f35-08c9-482d-ae36-ce8e7c0cfb54',
    name: 'Atlantic Ave @ BQE',
    latitude: 40.691514,
    longitude: -73.998809,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/dd374f35-08c9-482d-ae36-ce8e7c0cfb54/image',
  },
  {
    id: '38790585-9444-46a7-b85e-2db8f163ecf7',
    name: '43 Ave @ 27 St',
    latitude: 40.748228,
    longitude: -73.9417,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/38790585-9444-46a7-b85e-2db8f163ecf7/image',
  },
  {
    id: '22df28bd-413a-4847-9bb7-35a36c914264',
    name: '1st camera North Bound BPU -148.51',
    latitude: 40.701349,
    longitude: -74.012679,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/22df28bd-413a-4847-9bb7-35a36c914264/image',
  },
  {
    id: '40961631-fb83-4f48-8ffb-3385448d4e5f',
    name: '7 Ave @ 18 St',
    latitude: 40.660584,
    longitude: -73.987209,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/40961631-fb83-4f48-8ffb-3385448d4e5f/image',
  },
  {
    id: 'e96fb86f-4bf6-4f97-b7f3-ec4f2e960788',
    name: 'Clearview @ Northern Blvd',
    latitude: 40.7577251647716,
    longitude: -73.776798248291,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/e96fb86f-4bf6-4f97-b7f3-ec4f2e960788/image',
  },
  {
    id: '1da7a29e-9993-4b93-b13a-e29b40c2069d',
    name: 'C2-BQE-04_WB_at_Sackett_St-Ex26',
    latitude: 40.684718,
    longitude: -74.001218,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/1da7a29e-9993-4b93-b13a-e29b40c2069d/image',
  },
  {
    id: '1ede87de-aba2-45bb-a792-cadf59eb792e',
    name: 'C3-WSE-04-SB_at_Rossville_Ave-Ex4',
    latitude: 40.554843,
    longitude: -74.213329,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/1ede87de-aba2-45bb-a792-cadf59eb792e/image',
  },
  {
    id: 'cea3d6a8-b248-441a-8acd-188ffa5ea630',
    name: 'C3-SIE-06A-E_at_Crafton_Ave_Ex10',
    latitude: 40.607469,
    longitude: -74.141823,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/cea3d6a8-b248-441a-8acd-188ffa5ea630/image',
  },
  {
    id: 'e184e99b-6bbd-4dd7-a36b-ad17ca50ad36',
    name: 'Sands St @ Jay St - quad - ptz - 149.26',
    latitude: 40.699972,
    longitude: -73.986858,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/e184e99b-6bbd-4dd7-a36b-ad17ca50ad36/image',
  },
  {
    id: '27cc1c4b-fb4a-41b3-845c-8fd9e2fa0a2c',
    name: 'Woodhaven Blvd @ Park ln',
    latitude: 40.69755,
    longitude: -73.852925,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/27cc1c4b-fb4a-41b3-845c-8fd9e2fa0a2c/image',
  },
  {
    id: 'b08600e6-7189-4104-a484-709dc81a3fa7',
    name: 'Grand Ave @ Hamilton Pl',
    latitude: 40.724536,
    longitude: -73.898416,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/b08600e6-7189-4104-a484-709dc81a3fa7/image',
  },
  {
    id: 'd675de1b-d9c7-4e61-b272-1def8d8ccd60',
    name: 'MHB-26 BKLYN N UPRDW @ TWR - Bikeway',
    latitude: 40.70502,
    longitude: -73.989161,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/d675de1b-d9c7-4e61-b272-1def8d8ccd60/image',
  },
  {
    id: '69278f3b-9d11-4256-8ef7-70c02a01bfc2',
    name: 'Pennsylvania Ave @ Flatlands Ave',
    latitude: 40.652728,
    longitude: -73.886256,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/69278f3b-9d11-4256-8ef7-70c02a01bfc2/image',
  },
  {
    id: '74bdd301-683c-4ea7-abf2-a5715dca8e17',
    name: 'York Ave @ 63 St',
    latitude: 40.761216,
    longitude: -73.957815,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/74bdd301-683c-4ea7-abf2-a5715dca8e17/image',
  },
  {
    id: '54b2e31f-d9d7-43bd-b86f-3b15f4881ae8',
    name: 'C3-WSE-02-SB_at_Woodrow_Rd-Ex3',
    latitude: 40.540946,
    longitude: -74.224364,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/54b2e31f-d9d7-43bd-b86f-3b15f4881ae8/image',
  },
  {
    id: 'f5c6fd9c-8e5b-4c3c-8c3e-31233678f15b',
    name: 'Lexington Ave @ 96 St',
    latitude: 40.785793,
    longitude: -73.951017,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/f5c6fd9c-8e5b-4c3c-8c3e-31233678f15b/image',
  },
  {
    id: '57a8e506-1b7d-4a44-94c2-5cb2a4d31b21',
    name: 'Roosevelt Ave @ 79St',
    latitude: 40.747351,
    longitude: -73.8867,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/57a8e506-1b7d-4a44-94c2-5cb2a4d31b21/image',
  },
  {
    id: 'a4fa36ac-f546-4ec1-b579-135f0ab204de',
    name: 'Gatling Pl @ 86 St - 186.2',
    latitude: 40.619944,
    longitude: -74.023763,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/a4fa36ac-f546-4ec1-b579-135f0ab204de/image',
  },
  {
    id: 'd125f801-5576-4e42-874c-a643a86019c0',
    name: 'Bay St @ Richmond Terr.',
    latitude: 40.642219,
    longitude: -74.075142,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/d125f801-5576-4e42-874c-a643a86019c0/image',
  },
  {
    id: 'e5f322e7-e38c-4a3c-9b1b-8df2cb459884',
    name: 'FDR @ 48 St',
    latitude: 40.751693,
    longitude: -73.965239,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/e5f322e7-e38c-4a3c-9b1b-8df2cb459884/image',
  },
  {
    id: '8a60eb4e-4069-4c0f-9bca-b8cc52915ffb',
    name: 'Jackson Ave @ 21 St',
    latitude: 40.74464,
    longitude: -73.94847,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/8a60eb4e-4069-4c0f-9bca-b8cc52915ffb/image',
  },
  {
    id: '82ccb93a-fe0d-4e92-8419-64336edf761e',
    name: 'C2-BQE-10-WB_at_State_St_UP-Ex27',
    latitude: 40.692535,
    longitude: -73.999642,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/82ccb93a-fe0d-4e92-8419-64336edf761e/image',
  },
  {
    id: '907af141-b289-47d3-9f41-edc7667cff7e',
    name: 'Hylan Blvd @ Guyon Ave',
    latitude: 40.560385,
    longitude: -74.120024,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/907af141-b289-47d3-9f41-edc7667cff7e/image',
  },
  {
    id: '0267c1e2-6eaf-49d4-a063-df89e9242993',
    name: 'FDR Dr @ 79 St',
    latitude: 40.770256,
    longitude: -73.947626,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/0267c1e2-6eaf-49d4-a063-df89e9242993/image',
  },
  {
    id: 'b221fdc4-ca81-41ae-875e-bf0341377758',
    name: 'C1-BRE-06_W - WB_at_CBX-Hutch_Int-EX6A',
    latitude: 40.829767,
    longitude: -73.834824,
    area: 'Bronx',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/b221fdc4-ca81-41ae-875e-bf0341377758/image',
  },
  {
    id: 'ed8fac76-2128-4099-8dfd-80144bd059d4',
    name: 'Kissena Blvd @ Holly Ave',
    latitude: 40.750627,
    longitude: -73.819113,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/ed8fac76-2128-4099-8dfd-80144bd059d4/image',
  },
  {
    id: 'b331d9d1-c081-4476-8302-83445ac196e7',
    name: 'Dyer Ave @ 42 Street',
    latitude: 40.7589811180163,
    longitude: -73.9939438000961,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/b331d9d1-c081-4476-8302-83445ac196e7/image',
  },
  {
    id: 'd3ab8634-97be-4229-9aa3-c3637ff66ea9',
    name: 'Columbia St @ Degraw St',
    latitude: 40.685735,
    longitude: -74.002365,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/d3ab8634-97be-4229-9aa3-c3637ff66ea9/image',
  },
  {
    id: '50725dbd-6e39-4ed0-aa3b-89f9c8feff4e',
    name: 'FDR Dr @ 135 Street',
    latitude: 40.8109509339364,
    longitude: -73.9343833923339,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/50725dbd-6e39-4ed0-aa3b-89f9c8feff4e/image',
  },
  {
    id: 'c3005e2b-a94c-44ab-80a4-29e6be8700d5',
    name: 'Jackie Robinson Pkwy @ burns St',
    latitude: 40.712545,
    longitude: -73.834995,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/c3005e2b-a94c-44ab-80a4-29e6be8700d5/image',
  },
  {
    id: '5531396b-856d-429b-8bde-a845ef87aead',
    name: 'Henry Hudson @ 158 St',
    latitude: 40.8358919160327,
    longitude: -73.9487171173095,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/5531396b-856d-429b-8bde-a845ef87aead/image',
  },
  {
    id: '16de4b9a-83fe-4d11-91cd-d775cc1e559c',
    name: 'FDR Dr @ 111 ST',
    latitude: 40.791666,
    longitude: -73.935403,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/16de4b9a-83fe-4d11-91cd-d775cc1e559c/image',
  },
  {
    id: '6e9a1a7e-63ad-4cab-b14a-1864040409fb',
    name: 'Hylan Blvd @ Richmond Ave',
    latitude: 40.534229,
    longitude: -74.153896,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/6e9a1a7e-63ad-4cab-b14a-1864040409fb/image',
  },
  {
    id: 'f25384ea-9cb3-4202-b271-358e3cc67701',
    name: 'Navy St @ Park Ave & Tillary St',
    latitude: 40.69672937,
    longitude: -73.98037536,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/f25384ea-9cb3-4202-b271-358e3cc67701/image',
  },
  {
    id: '3f85b7f5-564d-4098-9ffd-580ab6f88ed5',
    name: 'Hempstead Ave at Jamaica Ave',
    latitude: 40.716182,
    longitude: -73.744776,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/3f85b7f5-564d-4098-9ffd-580ab6f88ed5/image',
  },
  {
    id: '7ae83f13-3d0e-4fd3-bc88-6fc41bde04c3',
    name: 'Cross Island Pkwy @ Union Tpke',
    latitude: 40.7401688594078,
    longitude: -73.7265014648437,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/7ae83f13-3d0e-4fd3-bc88-6fc41bde04c3/image',
  },
  {
    id: '33dda383-4778-48ee-97e7-abcd68b5d365',
    name: 'BB-64 South Rdwy @ Bklyn Twr Side Sapn',
    latitude: 40.703795,
    longitude: -73.994062,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/33dda383-4778-48ee-97e7-abcd68b5d365/image',
  },
  {
    id: '3869bbbf-b9ce-4157-a6e6-9040f1540827',
    name: 'C3-WSE-01-NB_at_Englewood_Ave-Ex2',
    latitude: 40.532368,
    longitude: -74.223617,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/3869bbbf-b9ce-4157-a6e6-9040f1540827/image',
  },
  {
    id: '50fed16e-8068-4b89-ada4-246fc112b924',
    name: 'C2-BQE-30A_W_at_Stewrt_Ave_Kosc-Br',
    latitude: 40.724979,
    longitude: -73.934058,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/50fed16e-8068-4b89-ada4-246fc112b924/image',
  },
  {
    id: '5f1847a6-f7fa-4663-afb8-bcbcb93f0c69',
    name: 'C2-BQE-12-WB_at_Furmn_St_LL-Ex28A',
    latitude: 40.69995,
    longitude: -73.996221,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/5f1847a6-f7fa-4663-afb8-bcbcb93f0c69/image',
  },
  {
    id: '8933100a-8229-42fe-b4b2-265db410d7ae',
    name: '5 Ave @ 46 St',
    latitude: 40.756036,
    longitude: -73.979014,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/8933100a-8229-42fe-b4b2-265db410d7ae/image',
  },
  {
    id: '4355c2af-b181-4cc2-98ef-cec3b1475c51',
    name: 'Veterans Rd @ Bloomingdale Rd - quad - ptz - 0.130',
    latitude: 40.52869,
    longitude: -74.21684,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/4355c2af-b181-4cc2-98ef-cec3b1475c51/image',
  },
  {
    id: 'e438c68c-c1e4-4fc1-9d1e-28cab8acb42a',
    name: 'Henry Hudson Pkwy @ 70 St',
    latitude: 40.779679,
    longitude: -73.988462,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/e438c68c-c1e4-4fc1-9d1e-28cab8acb42a/image',
  },
  {
    id: 'abdd6b29-6f7b-4662-bb43-078fe2c76199',
    name: 'Cross Bay Blvd @ North Channel Bridge',
    latitude: 40.588759,
    longitude: -73.819342,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/abdd6b29-6f7b-4662-bb43-078fe2c76199/image',
  },
  {
    id: '97e0da4b-551e-4ef4-a12a-7cbcc0b8560a',
    name: 'Qns Blvd @ 65 PL',
    latitude: 40.740859,
    longitude: -73.899668,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/97e0da4b-551e-4ef4-a12a-7cbcc0b8560a/image',
  },
  {
    id: 'b6ce5739-ca1f-4a8d-bfd7-5979d6ff6dfc',
    name: '2nd Camera North Bound BPU -148.52',
    latitude: 40.7029534,
    longitude: -74.016916,
    area: 'Bronx',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/b6ce5739-ca1f-4a8d-bfd7-5979d6ff6dfc/image',
  },
  {
    id: '9e3164a8-1c63-4790-bc24-f9d752f3ae41',
    name: 'Belt Pkwy @ Flatbush',
    latitude: 40.5956413285726,
    longitude: -73.9076471328735,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/9e3164a8-1c63-4790-bc24-f9d752f3ae41/image',
  },
  {
    id: '7a7016c5-a086-40fd-9298-90f17f8b6cea',
    name: '5 Ave @ 49 St',
    latitude: 40.7579183170509,
    longitude: -73.9776717716469,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/7a7016c5-a086-40fd-9298-90f17f8b6cea/image',
  },
  {
    id: '7bf1dd27-0a96-4381-bb7e-03123c4b7739',
    name: 'Cross Island Pkwy @ Throgsneck',
    latitude: 40.788185,
    longitude: -73.790539,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/7bf1dd27-0a96-4381-bb7e-03123c4b7739/image',
  },
  {
    id: '9561ad5f-0eda-460b-ab12-41caa4e0a91e',
    name: '47 St Bet. 5 Ave @ Madison Ave- Manhattan',
    latitude: 40.75632,
    longitude: -73.9777487,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/9561ad5f-0eda-460b-ab12-41caa4e0a91e/image',
  },
  {
    id: '35a808cf-7e4d-4ca5-891d-36ac48518662',
    name: 'West Side HWY BPU Entrance -148.54',
    latitude: 40.7051851,
    longitude: -74.0166288,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/35a808cf-7e4d-4ca5-891d-36ac48518662/image',
  },
  {
    id: '6973b27a-ca95-4aae-ad51-275ac1f6af9a',
    name: 'MHB-22 Manh N URDWY @ Twr',
    latitude: 40.708834,
    longitude: -73.991433,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/6973b27a-ca95-4aae-ad51-275ac1f6af9a/image',
  },
  {
    id: '454e566c-e3e3-4426-b91a-e0ea709e70f7',
    name: 'C3-SIE-06-EB_at_Victory_Blvd-Ex10',
    latitude: 40.609321,
    longitude: -74.150406,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/454e566c-e3e3-4426-b91a-e0ea709e70f7/image',
  },
  {
    id: '84a2c36a-ef84-41b6-a4eb-3c3a2bf3bf10',
    name: 'Stillwell Ave @ Surf Ave',
    latitude: 40.575565,
    longitude: -73.981202,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/84a2c36a-ef84-41b6-a4eb-3c3a2bf3bf10/image',
  },
  {
    id: '695c4b6d-78d1-4478-81e2-55c8e1acea68',
    name: 'C3-SIE-13_EB_at_Mosel_Avenue',
    latitude: 40.603743,
    longitude: -74.069126,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/695c4b6d-78d1-4478-81e2-55c8e1acea68/image',
  },
  {
    id: '6a49e889-4397-4c5a-a942-2225c1f1c5e7',
    name: 'C4-WST-07-Med_at_W.23rd_St',
    latitude: 40.748246,
    longitude: -74.007727,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/6a49e889-4397-4c5a-a942-2225c1f1c5e7/image',
  },
  {
    id: 'd23ec5fd-f956-4283-975a-623514b001a3',
    name: 'C1-CBE-05_S_SB_at_Walton_Ave-Ex2A',
    latitude: 40.845346,
    longitude: -73.911976,
    area: 'Bronx',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/d23ec5fd-f956-4283-975a-623514b001a3/image',
  },
  {
    id: 'ed670675-55d7-43e9-ac88-29f1290b843b',
    name: 'Woodhaven Blvd @ Myrtle Ave',
    latitude: 40.702613,
    longitude: -73.855269,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/ed670675-55d7-43e9-ac88-29f1290b843b/image',
  },
  {
    id: '4f3f56e3-f68e-4b60-a4ba-153ecb9094f7',
    name: '6 AVE @ 50 St',
    latitude: 40.75994,
    longitude: -73.9805,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/4f3f56e3-f68e-4b60-a4ba-153ecb9094f7/image',
  },
  {
    id: '3cede892-0c4e-47ac-9a1a-1c837e9753c4',
    name: 'Beach Channel Dr @ Beach 69 St',
    latitude: 40.59277,
    longitude: -73.7981,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/3cede892-0c4e-47ac-9a1a-1c837e9753c4/image',
  },
  {
    id: '85d33af1-a82c-499c-b303-a16c8c891fe6',
    name: 'Stillwell Ave @ Neptune Ave',
    latitude: 40.579195,
    longitude: -73.981856,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/85d33af1-a82c-499c-b303-a16c8c891fe6/image',
  },
  {
    id: 'c74510ed-35cf-4908-ad10-f2c9575cc853',
    name: 'Hamilton Ave @ Henry St',
    latitude: 40.67840799,
    longitude: -74.00225295,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/c74510ed-35cf-4908-ad10-f2c9575cc853/image',
  },
  {
    id: '8431fefb-2068-4c83-920a-a6db628e7ce6',
    name: 'C1-BRP-01-SB_at_E.174th_St-Ex3',
    latitude: 40.834406,
    longitude: -73.874177,
    area: 'Bronx',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/8431fefb-2068-4c83-920a-a6db628e7ce6/image',
  },
  {
    id: 'b5b12361-b5b6-483f-a76e-b6cf98e06694',
    name: 'C5-BQE-37-EB_at_41st_Ave',
    latitude: 40.744962,
    longitude: -73.894487,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/b5b12361-b5b6-483f-a76e-b6cf98e06694/image',
  },
  {
    id: '7f865d20-e4f4-4f7c-88db-c0edf88a9501',
    name: 'Broadway @ 145 St',
    latitude: 40.826446,
    longitude: -73.950423,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/7f865d20-e4f4-4f7c-88db-c0edf88a9501/image',
  },
  {
    id: 'ac9ea7e9-4ab8-4188-be33-40266bcf9378',
    name: '2 AVE @ 86 St',
    latitude: 40.77787,
    longitude: -73.9518,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/ac9ea7e9-4ab8-4188-be33-40266bcf9378/image',
  },
  {
    id: '7add8765-182d-40e5-b196-a0e3c02ed787',
    name: 'Victory Blvd @ Loop Rd -131.42',
    latitude: 40.60879,
    longitude: -74.15355,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/7add8765-182d-40e5-b196-a0e3c02ed787/image',
  },
  {
    id: '4f8c2e84-c15a-4474-91fb-7e14554d4c4e',
    name: 'Central Park West @ 65 St',
    latitude: 40.771797,
    longitude: -73.979217,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/4f8c2e84-c15a-4474-91fb-7e14554d4c4e/image',
  },
  {
    id: '69833518-8972-4147-b518-2ab15dfe1b24',
    name: 'LIE @ Kissena Blvd',
    latitude: 40.738943,
    longitude: -73.815047,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/69833518-8972-4147-b518-2ab15dfe1b24/image',
  },
  {
    id: '9c4c2657-6796-4953-bbe6-c50f24bb5820',
    name: '5 Ave @ 57 St',
    latitude: 40.7629820055328,
    longitude: -73.9739858644822,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/9c4c2657-6796-4953-bbe6-c50f24bb5820/image',
  },
  {
    id: '378e6e98-18b2-42a5-b0fa-b43af94f7395',
    name: 'Adam C. Powell Blvd @ 110 St/CPN',
    latitude: 40.799492,
    longitude: -73.955209,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/378e6e98-18b2-42a5-b0fa-b43af94f7395/image',
  },
  {
    id: '96be7098-dda4-42da-bfe2-55bc5c6b94fb',
    name: 'Baxter St @ Canal Street',
    latitude: 40.7175537302479,
    longitude: -73.999310720446,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/96be7098-dda4-42da-bfe2-55bc5c6b94fb/image',
  },
  {
    id: 'c073c2d9-919f-4ba3-ad13-d331d378e12b',
    name: 'Columbia St @ Carroll St - 168.202',
    latitude: 40.683144,
    longitude: -74.003728,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/c073c2d9-919f-4ba3-ad13-d331d378e12b/image',
  },
  {
    id: 'b1d5d592-9e36-478e-bedc-5fb02d836bc3',
    name: 'Sutton Pl @ 58 St',
    latitude: 40.7572700598272,
    longitude: -73.9599609375,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/b1d5d592-9e36-478e-bedc-5fb02d836bc3/image',
  },
  {
    id: '8c13c3b4-b227-4278-9beb-e58314c042d5',
    name: 'Flushing Ave @ 61 St',
    latitude: 40.721009,
    longitude: -73.904092,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/8c13c3b4-b227-4278-9beb-e58314c042d5/image',
  },
  {
    id: 'b95471db-03ed-4fc3-9b91-561328029fd4',
    name: 'Houston St @ Bowery St',
    latitude: 40.724348,
    longitude: -73.992623,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/b95471db-03ed-4fc3-9b91-561328029fd4/image',
  },
  {
    id: 'a2017340-a9a6-41d4-921f-8c7daa48cdac',
    name: 'Grand Central Pkwy @ 188 St',
    latitude: 40.722319,
    longitude: -73.7768,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/a2017340-a9a6-41d4-921f-8c7daa48cdac/image',
  },
  {
    id: '28107d1c-08da-4cd3-9777-09471ca30225',
    name: 'Henry Hudson Pkwy @ 96 St',
    latitude: 40.7956179688014,
    longitude: -73.976182937622,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/28107d1c-08da-4cd3-9777-09471ca30225/image',
  },
  {
    id: '4053642d-dd92-4045-ac55-069110659563',
    name: 'Crotona Pkwy @ Cross Bronx Expwy',
    latitude: 40.840259,
    longitude: -73.885677,
    area: 'Bronx',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/4053642d-dd92-4045-ac55-069110659563/image',
  },
  {
    id: '261853c1-91c6-4007-9d52-ed530d1a826a',
    name: 'C3-SIE-15-EB_at_Fingerboard_Rd_Ex15',
    latitude: 40.603743,
    longitude: -74.069126,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/261853c1-91c6-4007-9d52-ed530d1a826a/image',
  },
  {
    id: 'cbdd2872-4e00-4699-9679-871bc2c30834',
    name: 'Hamilton Ave @ Hicks St',
    latitude: 40.680102,
    longitude: -74.003745,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/cbdd2872-4e00-4699-9679-871bc2c30834/image',
  },
  {
    id: '43e3d020-e4f2-4599-a19f-72ae778f1dcd',
    name: 'C5-LIE-02-EB_at_27th_St-Ex15',
    latitude: 40.739299,
    longitude: -73.941697,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/43e3d020-e4f2-4599-a19f-72ae778f1dcd/image',
  },
  {
    id: '749f7d56-21e8-4716-8efc-624723f5b9a8',
    name: 'C1-CBE-01_N_NB_at_Amsterdam_Ave-Ex-HRD',
    latitude: 40.845935,
    longitude: -73.931089,
    area: 'Bronx',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/749f7d56-21e8-4716-8efc-624723f5b9a8/image',
  },
  {
    id: '7efa7790-bbec-4118-bae4-ddb390d0eaa8',
    name: 'C2-BQE-13_WB_at_Middagh_St-Ex28A',
    latitude: 40.701206,
    longitude: -73.994465,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/7efa7790-bbec-4118-bae4-ddb390d0eaa8/image',
  },
  {
    id: '8ff75339-6269-457e-8fb0-55af56997c5b',
    name: 'C5-LIE-22-WB_at_163rd_St-Ex25',
    latitude: 40.73865138,
    longitude: -73.80595654,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/8ff75339-6269-457e-8fb0-55af56997c5b/image',
  },
  {
    id: '42799ffa-1718-43ff-947f-9b678cbf41c5',
    name: 'Grand St. @ Clinton St',
    latitude: 40.71597,
    longitude: -73.986695,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/42799ffa-1718-43ff-947f-9b678cbf41c5/image',
  },
  {
    id: 'a9169e9f-4eb3-4ebd-8149-bc1413087193',
    name: 'Cross Island Pkwy @ Bayside Marina',
    latitude: 40.779278,
    longitude: -73.768564,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/a9169e9f-4eb3-4ebd-8149-bc1413087193/image',
  },
  {
    id: '0b0cbcfb-7c14-4b94-8bac-be494472c396',
    name: 'Amsterdam @ 86 St',
    latitude: 40.787693,
    longitude: -73.975016,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/0b0cbcfb-7c14-4b94-8bac-be494472c396/image',
  },
  {
    id: '8cc75cbc-e050-4947-aee8-639f63fe4ca7',
    name: 'Canal Street @ Chrystie Street',
    latitude: 40.7151919083982,
    longitude: -73.9945936203003,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/8cc75cbc-e050-4947-aee8-639f63fe4ca7/image',
  },
  {
    id: '89f83119-67ea-4395-9402-66cc19f5d57b',
    name: 'Farmers Blvd @ N Conduit Ave',
    latitude: 40.667436,
    longitude: -73.766763,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/89f83119-67ea-4395-9402-66cc19f5d57b/image',
  },
  {
    id: '21add4fd-bf30-404e-a2ff-18b16688fe0d',
    name: 'C5-GCP-12_WB_at_69th_Rd-Ex11',
    latitude: 40.726696,
    longitude: -73.837873,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/21add4fd-bf30-404e-a2ff-18b16688fe0d/image',
  },
  {
    id: 'cd229284-a743-4ac4-9430-366f11e68d6c',
    name: 'Irving Pl @ 14 St',
    latitude: 40.733984,
    longitude: -73.988693,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/cd229284-a743-4ac4-9430-366f11e68d6c/image',
  },
  {
    id: 'a0df8038-1012-48b4-8fa7-6d469472ebf6',
    name: 'C2-BQE-14_WB_at_Midgh_St-Ex28A',
    latitude: 40.701208,
    longitude: -73.994466,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/a0df8038-1012-48b4-8fa7-6d469472ebf6/image',
  },
  {
    id: 'bed364f9-5249-4285-9b03-70b91ce75baf',
    name: 'C1-MDE-04-SB_at_Grand_Concrse-Ex3',
    latitude: 40.815889,
    longitude: -73.931134,
    area: 'Bronx',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/bed364f9-5249-4285-9b03-70b91ce75baf/image',
  },
  {
    id: 'd766db98-8b2c-406a-b0ea-f437e2216157',
    name: 'Smith St @ 9 St - 170.106',
    latitude: 40.674746,
    longitude: -73.997865,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/d766db98-8b2c-406a-b0ea-f437e2216157/image',
  },
  {
    id: 'b9c20141-52ca-43a1-a7df-c2577ca384b6',
    name: 'Queens Plaza North @ East 21 st',
    latitude: 40.75258,
    longitude: -73.94375,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/b9c20141-52ca-43a1-a7df-c2577ca384b6/image',
  },
  {
    id: 'a409e9bd-6a0f-4cdc-81d8-290d5709dc74',
    name: 'FDR @ 38 St',
    latitude: 40.7458,
    longitude: -73.9705,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/a409e9bd-6a0f-4cdc-81d8-290d5709dc74/image',
  },
  {
    id: '83bf2591-579d-415b-a0d4-fe39868b46d1',
    name: '8 Ave @ 42 St',
    latitude: 40.7572405048358,
    longitude: -73.9897804546602,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/83bf2591-579d-415b-a0d4-fe39868b46d1/image',
  },
  {
    id: '858ef4e8-5058-4db2-96e2-70f71b65aa24',
    name: 'GCP @ 166 St',
    latitude: 40.716879,
    longitude: -73.800069,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/858ef4e8-5058-4db2-96e2-70f71b65aa24/image',
  },
  {
    id: 'dc0cb00c-0b2e-4851-9f8a-67954e4adbdb',
    name: 'Roebling St @ South 4 St',
    latitude: 40.710749,
    longitude: -73.959917,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/dc0cb00c-0b2e-4851-9f8a-67954e4adbdb/image',
  },
  {
    id: '1b127707-c45a-40d6-b0d3-8a76d3de6053',
    name: 'Roosevelt Ave @ Parsons Blvd',
    latitude: 40.761617,
    longitude: -73.822077,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/1b127707-c45a-40d6-b0d3-8a76d3de6053/image',
  },
  {
    id: '2589c0d6-c389-4861-b812-4ae68f560eba',
    name: '46 St Bet. 5 Ave & Madison Ave',
    latitude: 40.7557483,
    longitude: -73.9784187,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/2589c0d6-c389-4861-b812-4ae68f560eba/image',
  },
  {
    id: 'a440559d-5996-4fa4-84bc-0453fe1b71f3',
    name: 'Northern Blvd @ 40 Rd',
    latitude: 40.75109,
    longitude: -73.93482,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/a440559d-5996-4fa4-84bc-0453fe1b71f3/image',
  },
  {
    id: '3dc1adcd-7a47-45c3-a667-9d8fae9fdcd0',
    name: '8 Ave @ 14 St',
    latitude: 40.7397525513578,
    longitude: -74.0025212013102,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/3dc1adcd-7a47-45c3-a667-9d8fae9fdcd0/image',
  },
  {
    id: '041f8f94-fcf8-4860-9a5d-c81fb5c97501',
    name: 'Major Deegan Expwy @ 230 St',
    latitude: 40.8765141,
    longitude: -73.9047832,
    area: 'Bronx',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/041f8f94-fcf8-4860-9a5d-c81fb5c97501/image',
  },
  {
    id: 'a74c9c59-b6e1-4f7d-b260-7f54954e6e47',
    name: 'C2-GE-12_W_WB_at_26th St-Ex23',
    latitude: 40.661152,
    longitude: -74.000813,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/a74c9c59-b6e1-4f7d-b260-7f54954e6e47/image',
  },
  {
    id: 'f3ded76a-f110-4d7a-8eb4-230265affe83',
    name: '4 Ave @ Shore Rd',
    latitude: 40.61136,
    longitude: -74.034782,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/f3ded76a-f110-4d7a-8eb4-230265affe83/image',
  },
  {
    id: 'ddd3f06a-7e0e-4e00-b76a-52a511e9009d',
    name: 'C5-VWE-20_NB_at_Main_Street-Ex8',
    latitude: 40.70854,
    longitude: -73.819371,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/ddd3f06a-7e0e-4e00-b76a-52a511e9009d/image',
  },
  {
    id: 'ded03849-7c56-43e5-8e82-05b61c175aca',
    name: 'C1-CBE-04_N - NB_at_Macombs Rd-Ex2A',
    latitude: 40.844926,
    longitude: -73.917694,
    area: 'Bronx',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/ded03849-7c56-43e5-8e82-05b61c175aca/image',
  },
  {
    id: '8ab7071d-63a6-492a-8443-e0d817bc1339',
    name: 'Melrose Ave/Webster Ave @ E 161',
    latitude: 40.824194,
    longitude: -73.913826,
    area: 'Bronx',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/8ab7071d-63a6-492a-8443-e0d817bc1339/image',
  },
  {
    id: '4ec4d8da-6dcb-444d-b33a-096a7d07bb51',
    name: 'Metropolitan Ave @ Fresh Pond Rd',
    latitude: 40.71261,
    longitude: -73.9004,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/4ec4d8da-6dcb-444d-b33a-096a7d07bb51/image',
  },
  {
    id: '24c402b2-915d-49f8-9529-f723a171c134',
    name: 'FDR @ Grand St',
    latitude: 40.713209,
    longitude: -73.977491,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/24c402b2-915d-49f8-9529-f723a171c134/image',
  },
  {
    id: '02d7db8e-481d-477e-9cdb-a2b6c6ec1ca3',
    name: '2 Ave @ E 14 St',
    latitude: 40.732373,
    longitude: -73.984954,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/02d7db8e-481d-477e-9cdb-a2b6c6ec1ca3/image',
  },
  {
    id: 'e892a3e8-e4b5-4a70-ac2f-a1ad82af36a6',
    name: 'C2-GE-08_E_EB_at_54th_St',
    latitude: 40.645287,
    longitude: -74.01669,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/e892a3e8-e4b5-4a70-ac2f-a1ad82af36a6/image',
  },
  {
    id: 'afff9762-e6d4-4b4d-a2e7-60c13763dd16',
    name: 'Bowery @ Cooper Sq & 4 St',
    latitude: 40.727155,
    longitude: -73.991628,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/afff9762-e6d4-4b4d-a2e7-60c13763dd16/image',
  },
  {
    id: 'a26130e0-3c9b-4f43-b253-209d80d441f8',
    name: '62 St @ QBB Upper Level exit ramp',
    latitude: 40.76215,
    longitude: -73.96203,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/a26130e0-3c9b-4f43-b253-209d80d441f8/image',
  },
  {
    id: 'f2029d59-52c0-44b9-8030-90e03f710f8f',
    name: 'Richmond Ave @ Amboy Rd - quad - ptz - 1.218',
    latitude: 40.54332,
    longitude: -74.16428,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/f2029d59-52c0-44b9-8030-90e03f710f8f/image',
  },
  {
    id: 'fbe41159-b7cd-4b91-a365-5656bae67ae7',
    name: 'Farmers Blvd @ 147 Ave @ 175 St',
    latitude: 40.661198,
    longitude: -73.770991,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/fbe41159-b7cd-4b91-a365-5656bae67ae7/image',
  },
  {
    id: 'd324cf02-ff01-4b1d-a480-39143ced22cc',
    name: 'Sands St @ Adams St',
    latitude: 40.700378,
    longitude: -73.988693,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/d324cf02-ff01-4b1d-a480-39143ced22cc/image',
  },
  {
    id: '45756112-04f9-429f-9754-1939e25f4184',
    name: 'BB-68 South Rdwy @ Above Water St/Bklyn',
    latitude: 40.703286,
    longitude: -73.99356,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/45756112-04f9-429f-9754-1939e25f4184/image',
  },
  {
    id: 'a40475d9-6266-4f92-b695-bb6addd39892',
    name: 'Flatbush Ave @ Ave U',
    latitude: 40.609864,
    longitude: -73.922379,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/a40475d9-6266-4f92-b695-bb6addd39892/image',
  },
  {
    id: '9961488a-3ce7-4a4e-ba05-bb960fd32e4e',
    name: 'Flushing Ave @ Vanderbilt Ave',
    latitude: 40.697838,
    longitude: -73.970763,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/9961488a-3ce7-4a4e-ba05-bb960fd32e4e/image',
  },
  {
    id: '3fd80992-482b-4e88-ad7f-8c74690a8d37',
    name: 'BB-26 South Rdwy @ West of Manhattan Twr',
    latitude: 40.707458,
    longitude: -73.998712,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/3fd80992-482b-4e88-ad7f-8c74690a8d37/image',
  },
  {
    id: 'fc7db899-7a79-41f3-b9b1-b23ce64c5a5e',
    name: '7 Ave @ 49 St',
    latitude: 40.7604823513464,
    longitude: -73.983738054794,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/fc7db899-7a79-41f3-b9b1-b23ce64c5a5e/image',
  },
  {
    id: 'cbb04872-5f62-4989-acaa-e4166fa7c819',
    name: '8 Ave @ 18 St',
    latitude: 40.659056,
    longitude: -73.985216,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/cbb04872-5f62-4989-acaa-e4166fa7c819/image',
  },
  {
    id: '180dcc87-d861-43e3-8898-9ad5ee1a26a9',
    name: 'Lexington Ave @ 57 ST',
    latitude: 40.7609271914359,
    longitude: -73.9691468531185,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/180dcc87-d861-43e3-8898-9ad5ee1a26a9/image',
  },
  {
    id: '8cd15417-5b79-4065-9165-4b6ff0ff3f53',
    name: 'Broadway @ 46 St- Quad West',
    latitude: 40.75872,
    longitude: -73.98539,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/8cd15417-5b79-4065-9165-4b6ff0ff3f53/image',
  },
  {
    id: '0b4bd3d3-1741-49b3-87cc-d0960fa5f424',
    name: 'Lexington Ave @ 34 St',
    latitude: 40.7464005840423,
    longitude: -73.9797313879486,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/0b4bd3d3-1741-49b3-87cc-d0960fa5f424/image',
  },
  {
    id: 'f3d82b25-6b10-44c7-ae89-30df075a7ac8',
    name: 'Broadway @ 46 St- Quad North',
    latitude: 40.758722,
    longitude: -73.98536,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/f3d82b25-6b10-44c7-ae89-30df075a7ac8/image',
  },
  {
    id: '958d42a3-2b29-490f-ad0b-473423ee51e9',
    name: 'MHB-32 Bklyn S URDW @ Anch',
    latitude: 40.702878,
    longitude: -73.98845,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/958d42a3-2b29-490f-ad0b-473423ee51e9/image',
  },
  {
    id: 'ecba28cb-ac70-4d25-abcb-6506111ea120',
    name: 'FDR Dr @ Brooklyn Bridge Exit SB',
    latitude: 40.707897,
    longitude: -74.000162,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/ecba28cb-ac70-4d25-abcb-6506111ea120/image',
  },
  {
    id: 'b9ba6a87-0e0b-4c5a-ad6a-7ead399e0864',
    name: 'C1-MDE-11-NB_at_W.179th_St-Ex8',
    latitude: 40.855126,
    longitude: -73.918007,
    area: 'Bronx',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/b9ba6a87-0e0b-4c5a-ad6a-7ead399e0864/image',
  },
  {
    id: 'f4e822f7-d2a2-4146-851c-04b2fa6d5265',
    name: '5 Ave @ 42 St',
    latitude: 40.7534920464028,
    longitude: -73.9808970054167,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/f4e822f7-d2a2-4146-851c-04b2fa6d5265/image',
  },
  {
    id: '5e7535c0-fee4-4989-8481-0addea488020',
    name: 'Hylan Blvd @ Huguenot Ave',
    latitude: 40.524067,
    longitude: -74.186177,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/5e7535c0-fee4-4989-8481-0addea488020/image',
  },
  {
    id: 'ab0daf96-702f-4f07-8b8f-08264e0051ee',
    name: 'Narrows Rd South @ Lily Pond Ave',
    latitude: 40.601206,
    longitude: -74.065126,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/ab0daf96-702f-4f07-8b8f-08264e0051ee/image',
  },
  {
    id: 'fbfe89f1-6410-4189-bbeb-7e5fce28bf82',
    name: 'School Rd @ Bay St',
    latitude: 40.607106,
    longitude: -74.060997,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/fbfe89f1-6410-4189-bbeb-7e5fce28bf82/image',
  },
  {
    id: '167fabd4-70d7-4b74-add4-8cc077efe3f6',
    name: 'East 21 st @ QBB Upper Roadway Exit Ramp',
    latitude: 40.75113,
    longitude: -73.94518,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/167fabd4-70d7-4b74-add4-8cc077efe3f6/image',
  },
  {
    id: '8afc5cd6-f735-47e8-bd57-6e6d3b81b442',
    name: 'WBB-20 @ MidSpan Berry St',
    latitude: 40.7100522584289,
    longitude: -73.9630937576294,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/8afc5cd6-f735-47e8-bd57-6e6d3b81b442/image',
  },
  {
    id: '00077ee3-2c13-4674-adbd-a51b3484b0be',
    name: 'MHB-30 @ BRK S URW @ TWR Walk Way',
    latitude: 40.705035,
    longitude: -73.98958,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/00077ee3-2c13-4674-adbd-a51b3484b0be/image',
  },
  {
    id: 'a6095c69-aef9-4a64-8091-9a2cb8645ee7',
    name: 'Main St @ LIE N S/R',
    latitude: 40.742587,
    longitude: -73.825432,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/a6095c69-aef9-4a64-8091-9a2cb8645ee7/image',
  },
  {
    id: 'eafc65f5-6ff9-4203-905f-3995b9fbc9eb',
    name: '1 Ave @ 23 St',
    latitude: 40.7368873405677,
    longitude: -73.9785319648825,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/eafc65f5-6ff9-4203-905f-3995b9fbc9eb/image',
  },
  {
    id: '6d42b7fb-604b-4172-b35d-c0556c5d3fcf',
    name: 'C2-BQE-20-WB_at_Wythe_Ave-Ex31',
    latitude: 40.701706,
    longitude: -73.961222,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/6d42b7fb-604b-4172-b35d-c0556c5d3fcf/image',
  },
  {
    id: '7609996b-ec61-4c06-bb58-c9aa93c65b80',
    name: 'Grand St @ Graham Ave',
    latitude: 40.7116462,
    longitude: -73.943913,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/7609996b-ec61-4c06-bb58-c9aa93c65b80/image',
  },
  {
    id: 'f8e7c70d-bdcb-4394-b55c-d9bcef891fba',
    name: '11 Ave @ 42 St',
    latitude: 40.7607911152618,
    longitude: -73.9982590769288,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/f8e7c70d-bdcb-4394-b55c-d9bcef891fba/image',
  },
  {
    id: '67a4769b-dfb2-4a0d-9605-114df107646c',
    name: 'West St @ West Houston St',
    latitude: 40.729104,
    longitude: -74.010528,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/67a4769b-dfb2-4a0d-9605-114df107646c/image',
  },
  {
    id: 'c6022d8a-69df-45be-aadd-ec39a18a18fb',
    name: 'Br Br-20 S Rdwy FDR Dr',
    latitude: 40.708045,
    longitude: -73.999541,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/c6022d8a-69df-45be-aadd-ec39a18a18fb/image',
  },
  {
    id: '3486cafa-aab2-418a-baa4-89dcc438e8c9',
    name: '5 Ave @ 23 St',
    latitude: 40.7415700588724,
    longitude: -73.9895780597063,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/3486cafa-aab2-418a-baa4-89dcc438e8c9/image',
  },
  {
    id: '4d85c576-4313-4562-8eb5-0d9773ea2bf1',
    name: 'C1-CBE-06_N_NB_at_Weeks Ave-Ext02B',
    latitude: 40.84482,
    longitude: -73.907408,
    area: 'Bronx',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/4d85c576-4313-4562-8eb5-0d9773ea2bf1/image',
  },
  {
    id: 'cf6d1124-f012-4678-9277-2dca8d18232b',
    name: 'Gowanus Expy @ Gatling Pl @ 92 St - 4.34',
    latitude: 40.61637,
    longitude: -74.026182,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/cf6d1124-f012-4678-9277-2dca8d18232b/image',
  },
  {
    id: 'dd6b80d0-dad3-42a3-8b70-7cc963105027',
    name: 'C5-BQE-38_E_at_Broadway',
    latitude: 40.7487485,
    longitude: -73.895909,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/dd6b80d0-dad3-42a3-8b70-7cc963105027/image',
  },
  {
    id: 'e51a2974-8ca2-4fe2-a90a-842685cbbcc9',
    name: 'C1-CBX-18-Med_at_Pennyfield_Av-TNB',
    latitude: 40.819367,
    longitude: -73.81055,
    area: 'Bronx',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/e51a2974-8ca2-4fe2-a90a-842685cbbcc9/image',
  },
  {
    id: '84eccaf1-05f2-428c-a086-983a85277278',
    name: 'MHB-21 Manh N URDWY @ Arch',
    latitude: 40.708881,
    longitude: -73.991336,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/84eccaf1-05f2-428c-a086-983a85277278/image',
  },
  {
    id: 'cb43382f-7b5f-43a7-918b-607a69b2fb3a',
    name: 'Pearl St @ Dover',
    latitude: 40.7086859556133,
    longitude: -74.001932144165,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/cb43382f-7b5f-43a7-918b-607a69b2fb3a/image',
  },
  {
    id: 'e179ded3-4cdc-4110-ac9c-f12c20f9ccad',
    name: 'Qns Blvd @ 65 Ave',
    latitude: 40.7279742537155,
    longitude: -73.8576507568359,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/e179ded3-4cdc-4110-ac9c-f12c20f9ccad/image',
  },
  {
    id: 'd1e071f1-57c6-4e6a-b813-0c50b90f7b1a',
    name: 'Jackson Ave @ 42 Rd',
    latitude: 40.74823,
    longitude: -73.93926,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/d1e071f1-57c6-4e6a-b813-0c50b90f7b1a/image',
  },
  {
    id: 'f06979b2-3497-4330-9882-a06c8a442b7c',
    name: '6 Ave @ 34 St',
    latitude: 40.7498083287543,
    longitude: -73.9877461877174,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/f06979b2-3497-4330-9882-a06c8a442b7c/image',
  },
  {
    id: 'f801cf2f-cd02-4077-aa53-99ee8a00e1ab',
    name: '3 Ave @ Atlantic Ave',
    latitude: 40.68548746,
    longitude: -73.98067049,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/f801cf2f-cd02-4077-aa53-99ee8a00e1ab/image',
  },
  {
    id: 'df5bc905-6296-4f6e-ae6e-20a39b56da43',
    name: 'BB-51 North West Brooklyn Tower',
    latitude: 40.704172,
    longitude: -73.994324,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/df5bc905-6296-4f6e-ae6e-20a39b56da43/image',
  },
  {
    id: '08922d10-ec77-4e36-aa87-962ebfc39212',
    name: 'C3-SIE-08-EB_at_Bradley_Ave-Ex11',
    latitude: 40.607945,
    longitude: -74.131892,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/08922d10-ec77-4e36-aa87-962ebfc39212/image',
  },
  {
    id: '7c9ef8dd-7587-4e39-b486-13ef4c7e5721',
    name: 'Central Park West @ 100 St',
    latitude: 40.79421,
    longitude: -73.962857,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/7c9ef8dd-7587-4e39-b486-13ef4c7e5721/image',
  },
  {
    id: '6504ada3-3a93-4811-b2cd-31c377066f66',
    name: 'C5-LIE-17-EB_at_GCP-Ex22A_GCP',
    latitude: 40.740069,
    longitude: -73.844951,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/6504ada3-3a93-4811-b2cd-31c377066f66/image',
  },
  {
    id: 'fee01ae5-3f35-4fe1-a236-417d43b64101',
    name: 'Beach Channel Dr @ Beach 116 St',
    latitude: 40.58174,
    longitude: -73.838443,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/fee01ae5-3f35-4fe1-a236-417d43b64101/image',
  },
  {
    id: '538b23fd-59de-4f97-8f04-59f56c996c5c',
    name: 'MHB-25 Manh S URW @ Twr Walkwy',
    latitude: 40.708813,
    longitude: -73.991698,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/538b23fd-59de-4f97-8f04-59f56c996c5c/image',
  },
  {
    id: '8a6bc417-4877-4ebe-8052-88c1b261baf1',
    name: 'Central Park West @ 86 St',
    latitude: 40.785302,
    longitude: -73.969353,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/8a6bc417-4877-4ebe-8052-88c1b261baf1/image',
  },
  {
    id: '7e36617c-4210-4371-90df-89cfc2d25df2',
    name: 'Van Dam St Bet. 48 Ave & Hunter Pt',
    latitude: 40.740368,
    longitude: -73.9345,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/7e36617c-4210-4371-90df-89cfc2d25df2/image',
  },
  {
    id: '8188de4c-c144-4897-bee4-767022b832e9',
    name: 'Grand St (Borinquen Pl) @ Union Ave',
    latitude: 40.71096,
    longitude: -73.951087,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/8188de4c-c144-4897-bee4-767022b832e9/image',
  },
  {
    id: '3a3d7bc0-7f35-46ba-9cca-75fe83aac34d',
    name: '5 Ave @ 34 St',
    latitude: 40.7484435553342,
    longitude: -73.9845677012874,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/3a3d7bc0-7f35-46ba-9cca-75fe83aac34d/image',
  },
  {
    id: '6fa8acf2-f5bf-4200-afde-1240868ca3e3',
    name: 'Houston St @ Lafeyette St',
    latitude: 40.725063,
    longitude: -73.995413,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/6fa8acf2-f5bf-4200-afde-1240868ca3e3/image',
  },
  {
    id: '494a3907-4cc7-4a77-8d6f-1b6f3ca272c5',
    name: 'C3-WSE-03-SB_at_Bloomngdale_Rd-Ex3',
    latitude: 40.548607,
    longitude: -74.220828,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/494a3907-4cc7-4a77-8d6f-1b6f3ca272c5/image',
  },
  {
    id: '5e0a8966-79ae-4a7b-9561-aca2c37b22ff',
    name: 'C5-LIE-28-EB_at_213th_St-Ex28',
    latitude: 40.74669647,
    longitude: -73.76365673,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/5e0a8966-79ae-4a7b-9561-aca2c37b22ff/image',
  },
  {
    id: 'f1acca9b-0030-49c5-b589-33ab6ac24657',
    name: 'C1-TNE-01-SB_at_Otis-Ave',
    latitude: 40.835488,
    longitude: -73.824394,
    area: 'Bronx',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/f1acca9b-0030-49c5-b589-33ab6ac24657/image',
  },
  {
    id: '089d8066-4e5e-4549-9496-a5f4ffb56ef5',
    name: '7 Ave @ 9 St',
    latitude: 40.666941,
    longitude: -73.981419,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/089d8066-4e5e-4549-9496-a5f4ffb56ef5/image',
  },
  {
    id: '7faf5dd7-7f16-48c2-a35e-fee36f3da7d4',
    name: '3 Ave @ 63rd St',
    latitude: 40.640525,
    longitude: -74.022404,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/7faf5dd7-7f16-48c2-a35e-fee36f3da7d4/image',
  },
  {
    id: '5cc1f365-af4a-48be-8819-8f12e18725a3',
    name: '4 Ave @ 38 st - 179.90',
    latitude: 40.653191,
    longitude: -74.005389,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/5cc1f365-af4a-48be-8819-8f12e18725a3/image',
  },
  {
    id: 'af741eca-a192-41be-890a-22c7ae7d159a',
    name: 'WBB-10 NIR-4 @ FDR RD',
    latitude: 40.714823,
    longitude: -73.976455,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/af741eca-a192-41be-890a-22c7ae7d159a/image',
  },
  {
    id: '19a2c89d-ea4d-437a-ae0c-2902ade217d6',
    name: 'Central Park West @ 96 St',
    latitude: 40.791667,
    longitude: -73.964697,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/19a2c89d-ea4d-437a-ae0c-2902ade217d6/image',
  },
  {
    id: '984ebbad-ca64-41d8-8008-63aaae316952',
    name: 'Central Park West @ 72 St',
    latitude: 40.776225,
    longitude: -73.975974,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/984ebbad-ca64-41d8-8008-63aaae316952/image',
  },
  {
    id: '47070afa-8638-4dfe-8df0-bdfa391f57b7',
    name: 'C2-BQE-08-EB_at_Atlantic_Ave-Ex27',
    latitude: 40.690581,
    longitude: -73.998548,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/47070afa-8638-4dfe-8df0-bdfa391f57b7/image',
  },
  {
    id: 'd3503d31-e652-4618-9442-cf613600ea0b',
    name: 'C5-GCP-07-EB_at_Ditmars_Blvd-Ex9',
    latitude: 40.759784,
    longitude: -73.856583,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/d3503d31-e652-4618-9442-cf613600ea0b/image',
  },
  {
    id: 'ea774ec2-327b-4f3d-97ac-fd404c612cb1',
    name: 'C2-BQE-02_WB_at_Union_St-Ex26',
    latitude: 40.684051,
    longitude: -74.001538,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/ea774ec2-327b-4f3d-97ac-fd404c612cb1/image',
  },
  {
    id: 'f5d272cf-3bc6-48c3-94d0-808c4003a4e9',
    name: 'WBB-4 @ NOR Bklyn-Mid Span',
    latitude: 40.713463,
    longitude: -73.97145,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/f5d272cf-3bc6-48c3-94d0-808c4003a4e9/image',
  },
  {
    id: 'ec9eda79-e250-4e6f-a8f6-e51021fb054f',
    name: 'Amsterdam Ave @ 60 St',
    latitude: 40.7702068284977,
    longitude: -73.9868688583374,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/ec9eda79-e250-4e6f-a8f6-e51021fb054f/image',
  },
  {
    id: '523499eb-29b7-4ab9-a2a7-4b7f7836f311',
    name: 'Rockaway Blvd @ Division St',
    latitude: 40.6370209745622,
    longitude: -73.7404337158691,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/523499eb-29b7-4ab9-a2a7-4b7f7836f311/image',
  },
  {
    id: 'df527f8d-1d60-4c90-9b22-badbb87e469d',
    name: 'Furman St @ Joralemon St',
    latitude: 40.693905,
    longitude: -73.999247,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/df527f8d-1d60-4c90-9b22-badbb87e469d/image',
  },
  {
    id: '6b81f2fd-acf3-4af2-adc1-42250156ece8',
    name: 'Flatbush Ave @ Tillary St',
    latitude: 40.6955094542638,
    longitude: -73.9841222763061,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/6b81f2fd-acf3-4af2-adc1-42250156ece8/image',
  },
  {
    id: 'a356e2c6-7d95-4d93-85c1-da3d05485d8c',
    name: 'MADISON @ 34 ST',
    latitude: 40.7477755134971,
    longitude: -73.9829511142234,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/a356e2c6-7d95-4d93-85c1-da3d05485d8c/image',
  },
  {
    id: '89177410-fe37-46fa-8021-5951e3d443c0',
    name: 'Columbia St & BQE ENT and EXIT',
    latitude: 40.69040529,
    longitude: -74.00011983,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/89177410-fe37-46fa-8021-5951e3d443c0/image',
  },
  {
    id: '56fafa1b-3a26-49de-a6c0-1e6f804a1b0c',
    name: 'C2-GE-14A-WB_at_Cole_St',
    latitude: 40.67980655,
    longitude: -74.00432445,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/56fafa1b-3a26-49de-a6c0-1e6f804a1b0c/image',
  },
  {
    id: '7bac53fa-8296-40f8-9297-e7e67597a92c',
    name: 'C5-BQE-45-EB_at_GCP-Astoria_Blvd',
    latitude: 40.764773,
    longitude: -73.894705,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/7bac53fa-8296-40f8-9297-e7e67597a92c/image',
  },
  {
    id: 'edb8b647-1abb-4e20-b0e6-e446c17ac9c0',
    name: 'Jackie Robinson Pkwy @ Forest Pk Dr',
    latitude: 40.70273,
    longitude: -73.8624,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/edb8b647-1abb-4e20-b0e6-e446c17ac9c0/image',
  },
  {
    id: '79f45918-c13e-4357-9ccb-9e3e7ea5b6af',
    name: '1 Ave @ 57 st',
    latitude: 40.75823,
    longitude: -73.96289,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/79f45918-c13e-4357-9ccb-9e3e7ea5b6af/image',
  },
  {
    id: '7ae8f58a-84e9-4c9f-9e90-daa2dc548f20',
    name: 'Pearl Street @ St. James Pl',
    latitude: 40.7104751559999,
    longitude: -74.0002155303955,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/7ae8f58a-84e9-4c9f-9e90-daa2dc548f20/image',
  },
  {
    id: '1d5b7624-9334-4348-8119-4d0221988d24',
    name: 'Claremont @ Boston Rd.',
    latitude: 40.834938,
    longitude: -73.894132,
    area: 'Bronx',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/1d5b7624-9334-4348-8119-4d0221988d24/image',
  },
  {
    id: '76c47885-cc54-4e0d-989c-01cf1256dd1a',
    name: 'Jackson Ave @ 11 ST',
    latitude: 40.74327,
    longitude: -73.95146,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/76c47885-cc54-4e0d-989c-01cf1256dd1a/image',
  },
  {
    id: 'b222af52-75f2-4588-80ef-354bb7c159c8',
    name: 'Church St @ Park Pl',
    latitude: 40.713276,
    longitude: -74.009276,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/b222af52-75f2-4588-80ef-354bb7c159c8/image',
  },
  {
    id: '73b66e92-508f-407c-bada-883ab992fde0',
    name: 'Broadway @ Vesey St',
    latitude: 40.711408,
    longitude: -74.008688,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/73b66e92-508f-407c-bada-883ab992fde0/image',
  },
  {
    id: 'd7d72762-bcd2-4672-9bf7-1558bc6895b5',
    name: 'Union tpke @ Little Neck Pkwy',
    latitude: 40.743982,
    longitude: -73.717583,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/d7d72762-bcd2-4672-9bf7-1558bc6895b5/image',
  },
  {
    id: 'a3058350-1552-459f-8379-2fd06895e70a',
    name: 'Delancey St @ Bowery St ',
    latitude: 40.720317,
    longitude: -73.994016,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/a3058350-1552-459f-8379-2fd06895e70a/image',
  },
  {
    id: '77ea2042-4c1b-4a2c-b861-88dfa9f579f8',
    name: 'C5-LIE-11-EB_at_60th_St-Ex18',
    latitude: 40.726307,
    longitude: -73.905287,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/77ea2042-4c1b-4a2c-b861-88dfa9f579f8/image',
  },
  {
    id: 'f2964d50-042c-4021-8b52-992c08c6ff6f',
    name: '8 Ave @ 34 St',
    latitude: 40.7521973661027,
    longitude: -73.9934562042021,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/f2964d50-042c-4021-8b52-992c08c6ff6f/image',
  },
  {
    id: 'da689305-b159-4051-9d01-9881803adb4b',
    name: 'C5-BQE-41-EB_at_31st_Ave-Ex43',
    latitude: 40.758354,
    longitude: -73.901062,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/da689305-b159-4051-9d01-9881803adb4b/image',
  },
  {
    id: 'e6a7fd91-8669-4c27-a8d8-8a6941b62759',
    name: 'Flushing Bridge',
    latitude: 40.762558,
    longitude: -73.83709,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/e6a7fd91-8669-4c27-a8d8-8a6941b62759/image',
  },
  {
    id: '8ea73365-6c7b-423a-87fc-4b6fc279dafa',
    name: 'BQE @ Sands St',
    latitude: 40.700185,
    longitude: -73.985185,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/8ea73365-6c7b-423a-87fc-4b6fc279dafa/image',
  },
  {
    id: '311fa910-d8d6-4dde-acd4-ebaf275eba77',
    name: 'Atlantic Ave @ Hicks Ave - quad - ptz - 165.202',
    latitude: 40.691006,
    longitude: -73.99784,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/311fa910-d8d6-4dde-acd4-ebaf275eba77/image',
  },
  {
    id: '282429c3-3f55-4fa6-bca2-b128262699d4',
    name: 'QBB LL CM @ 11 St',
    latitude: 40.7526863291829,
    longitude: -73.9464426040649,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/282429c3-3f55-4fa6-bca2-b128262699d4/image',
  },
  {
    id: '15c0758b-5c9a-4841-8514-c04bc7320c70',
    name: 'NB Cross Brx Expy-Webster Av Exit ramp @ E 174 St & Cater Av',
    latitude: 40.844531,
    longitude: -73.903627,
    area: 'Bronx',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/15c0758b-5c9a-4841-8514-c04bc7320c70/image',
  },
  {
    id: '82b0f566-cab5-4366-bc3a-67f82cc4fec7',
    name: 'Bruckner Blvd @ Lincoln Ave',
    latitude: 40.807681,
    longitude: -73.929512,
    area: 'Bronx',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/82b0f566-cab5-4366-bc3a-67f82cc4fec7/image',
  },
  {
    id: '95f77270-6143-4522-b55e-a3ef8cc48e18',
    name: 'Furman St @ Atlantic Ave',
    latitude: 40.691928,
    longitude: -73.999892,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/95f77270-6143-4522-b55e-a3ef8cc48e18/image',
  },
  {
    id: '32bf4789-4142-4484-b110-88343799a40b',
    name: 'C1-MDE-15-NB_at_Jerome_Ave-Ex13',
    latitude: 40.897282,
    longitude: -73.879845,
    area: 'Bronx',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/32bf4789-4142-4484-b110-88343799a40b/image',
  },
  {
    id: 'abda729c-9f02-4ecf-b164-228b1528cfac',
    name: 'Queens Blvd @ Skillman',
    latitude: 40.7460324,
    longitude: -73.9344491,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/abda729c-9f02-4ecf-b164-228b1528cfac/image',
  },
  {
    id: '6a896a3f-45cc-4611-86aa-5ded034217ea',
    name: 'Cadman Plz W @ Prospect St - quad - ptz - 1.2',
    latitude: 40.700756,
    longitude: -73.990942,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/6a896a3f-45cc-4611-86aa-5ded034217ea/image',
  },
  {
    id: 'dfc5bbff-683c-483d-bed5-8ff2b7c4781b',
    name: 'Harlem River Dr @ 150 St',
    latitude: 40.824074,
    longitude: -73.934464,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/dfc5bbff-683c-483d-bed5-8ff2b7c4781b/image',
  },
  {
    id: '7374a49f-373d-479a-b630-52bd07639260',
    name: 'Roosevelt Ave @ Elmhurst Ave',
    latitude: 40.748456,
    longitude: -73.876234,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/7374a49f-373d-479a-b630-52bd07639260/image',
  },
  {
    id: 'e4542be1-fe19-4efa-a25e-0d0c1065c8a2',
    name: '58 St @ QBB UL Approach',
    latitude: 40.75959,
    longitude: -73.96396,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/e4542be1-fe19-4efa-a25e-0d0c1065c8a2/image',
  },
  {
    id: '9bd74b87-32d1-4767-8081-86a2e83f28f2',
    name: '12 Ave @ 42 St',
    latitude: 40.761978792937,
    longitude: -74.0010637153985,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/9bd74b87-32d1-4767-8081-86a2e83f28f2/image',
  },
  {
    id: '9dbb3101-9918-4b61-946f-a34d7c7c662b',
    name: 'East Houston St @ Ave B',
    latitude: 40.721437,
    longitude: -73.983838,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/9dbb3101-9918-4b61-946f-a34d7c7c662b/image',
  },
  {
    id: '3ef929e1-e203-4bd5-bd48-438e76bbc348',
    name: 'Northern Blvd @ Broadway',
    latitude: 40.753292,
    longitude: -73.906896,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/3ef929e1-e203-4bd5-bd48-438e76bbc348/image',
  },
  {
    id: '6851bbf7-e079-4379-b021-e5c7dafcb8c9',
    name: '8 Ave @ 9 St',
    latitude: 40.665895,
    longitude: -73.979249,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/6851bbf7-e079-4379-b021-e5c7dafcb8c9/image',
  },
  {
    id: '2cde9c13-0146-4d4a-8d26-b6e7d34d9eec',
    name: 'C5-BQE-39-WB_at_Broadway-Ex40',
    latitude: 40.749296,
    longitude: -73.896779,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/2cde9c13-0146-4d4a-8d26-b6e7d34d9eec/image',
  },
  {
    id: '7c996b88-8ee6-4b0d-99c8-5764cf68f3bc',
    name: 'C1-MDE-03-SB_at_E.138th_St-Ex3',
    latitude: 40.812522,
    longitude: -73.931754,
    area: 'Bronx',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/7c996b88-8ee6-4b0d-99c8-5764cf68f3bc/image',
  },
  {
    id: 'c75873dc-16d0-4e9c-b5b5-1c6ede0b0b63',
    name: 'FDR @ E 6 St',
    latitude: 40.721494,
    longitude: -73.974554,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/c75873dc-16d0-4e9c-b5b5-1c6ede0b0b63/image',
  },
  {
    id: '69c109a1-a8dd-4164-bbc1-88497dc67c1e',
    name: 'MHB-20 Mahn S URW @ Anch',
    latitude: 40.7099871970258,
    longitude: -73.9930057525634,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/69c109a1-a8dd-4164-bbc1-88497dc67c1e/image',
  },
  {
    id: 'a0d4d925-37f5-45f4-b25a-a65c6577c008',
    name: 'BB-47 North Rdwy @ West of Bklyn Twr',
    latitude: 40.705446,
    longitude: -73.9959166,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/a0d4d925-37f5-45f4-b25a-a65c6577c008/image',
  },
  {
    id: 'd8e022cc-c262-45ac-a939-8e86e20853fd',
    name: 'Ft Washington @ 178 St',
    latitude: 40.848657,
    longitude: -73.939207,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/d8e022cc-c262-45ac-a939-8e86e20853fd/image',
  },
  {
    id: '951e899e-bc73-4bef-ad6a-feaeaa17e9c9',
    name: 'Ocean Pkwy @ Ave I',
    latitude: 40.626558,
    longitude: -73.970924,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/951e899e-bc73-4bef-ad6a-feaeaa17e9c9/image',
  },
  {
    id: 'beda95e2-f7d1-43a3-9a8b-7ab89e03f296',
    name: 'FDR Dr @ Catherine Street',
    latitude: 40.708979,
    longitude: -73.996036,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/beda95e2-f7d1-43a3-9a8b-7ab89e03f296/image',
  },
  {
    id: '074b4e06-5090-47a5-b672-8b15780c9255',
    name: '2 Ave @ 79 St',
    latitude: 40.773298,
    longitude: -73.955022,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/074b4e06-5090-47a5-b672-8b15780c9255/image',
  },
  {
    id: 'f0f068df-4148-42e7-a208-7ec171777247',
    name: 'Belt Pkwy @ Cropsey Ave - quad - 2.3',
    latitude: 40.584105,
    longitude: -73.986885,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/f0f068df-4148-42e7-a208-7ec171777247/image',
  },
  {
    id: '6d7298dd-f56a-4d33-b1d4-b2c1ec659dda',
    name: 'C4-WST-02-NB_at_Vestry_St',
    latitude: 40.722898,
    longitude: -74.011638,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/6d7298dd-f56a-4d33-b1d4-b2c1ec659dda/image',
  },
  {
    id: '0acd4543-183d-40c7-993e-e39eb831de0b',
    name: 'QBB LL CM @ York Ave',
    latitude: 40.759021,
    longitude: -73.959431,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/0acd4543-183d-40c7-993e-e39eb831de0b/image',
  },
  {
    id: 'f2fbddd2-a5bb-45fe-93ef-2a9b9940bbd5',
    name: 'FDR Dr @ 131 ST (3 Ave Br)',
    latitude: 40.808367,
    longitude: -73.934622,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/f2fbddd2-a5bb-45fe-93ef-2a9b9940bbd5/image',
  },
  {
    id: 'f419b38e-2b68-4659-a525-d0a31add8528',
    name: '4 Ave @ Prospect Ave- 66.138',
    latitude: 40.665473,
    longitude: -73.992742,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/f419b38e-2b68-4659-a525-d0a31add8528/image',
  },
  {
    id: '03051d28-db9c-4527-97c7-0bb3f35e7cef',
    name: 'C2-BQE-11-WB_at_Furmn_St_UP-Ex28A',
    latitude: 40.699951,
    longitude: -73.996223,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/03051d28-db9c-4527-97c7-0bb3f35e7cef/image',
  },
  {
    id: 'f0b924fe-0df6-4ac2-85a2-5d2b96d081d5',
    name: '7 Ave @ 57 St',
    latitude: 40.765534775125,
    longitude: -73.9800400250842,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/f0b924fe-0df6-4ac2-85a2-5d2b96d081d5/image',
  },
  {
    id: '8df73045-61fd-4394-b21a-dfa3f440d6e7',
    name: 'C3-MLK-01-SB_at_Watchogue_Rd-Ex10',
    latitude: 40.618503,
    longitude: -74.151462,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/8df73045-61fd-4394-b21a-dfa3f440d6e7/image',
  },
  {
    id: '0c9a2836-c408-48d3-85c7-1977c33d9133',
    name: 'Broadway @ 46 St',
    latitude: 40.758744,
    longitude: -73.9855,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/0c9a2836-c408-48d3-85c7-1977c33d9133/image',
  },
  {
    id: 'd7910856-9d2c-4142-b8cc-cbd6c4b3acac',
    name: 'Broadway @ 169 Street',
    latitude: 40.8408595069056,
    longitude: -73.9391469955444,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/d7910856-9d2c-4142-b8cc-cbd6c4b3acac/image',
  },
  {
    id: '566bce47-4390-4ff3-94ab-7a0ca2989163',
    name: 'Amsterdam Ave @ 125 St',
    latitude: 40.813323,
    longitude: -73.956265,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/566bce47-4390-4ff3-94ab-7a0ca2989163/image',
  },
  {
    id: '2334b7bd-a237-4bf5-9224-5241bd4ee29e',
    name: 'WBB-6 North Rdwy @ Delancy St and Clinton St',
    latitude: 40.7172411518637,
    longitude: -73.985538482666,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/2334b7bd-a237-4bf5-9224-5241bd4ee29e/image',
  },
  {
    id: 'cf034f0c-de3f-44ba-be1b-51f135d7d665',
    name: 'C2-BQE-26-Cntr_at_Grand_Ave-Ex32',
    latitude: 40.710536,
    longitude: -73.95588,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/cf034f0c-de3f-44ba-be1b-51f135d7d665/image',
  },
  {
    id: 'f8549617-2066-4d74-b2b9-b06165dd13e2',
    name: 'C1-TNE-02-Med_at_Randall_Ave',
    latitude: 40.827977,
    longitude: -73.817743,
    area: 'Bronx',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/f8549617-2066-4d74-b2b9-b06165dd13e2/image',
  },
  {
    id: 'c65db13c-61ee-4e8c-859f-fa52a297114a',
    name: 'BB-27A Manhattan Tower South',
    latitude: 40.707138,
    longitude: -73.998502,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/c65db13c-61ee-4e8c-859f-fa52a297114a/image',
  },
  {
    id: 'fec41cf4-e167-48ae-9d40-785d8e86078d',
    name: 'MHB-16 Manhattan Colonade Entr',
    latitude: 40.716139,
    longitude: -73.996063,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/fec41cf4-e167-48ae-9d40-785d8e86078d/image',
  },
  {
    id: '140a20d7-7ae7-409c-8c18-67d6b2ef7b2d',
    name: 'West st and Battery place',
    latitude: 40.704944,
    longitude: -74.017341,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/140a20d7-7ae7-409c-8c18-67d6b2ef7b2d/image',
  },
  {
    id: 'c34ca47e-e375-4b9f-a8d7-f9737566b783',
    name: '6 Ave @ 42 St',
    latitude: 40.7548488195947,
    longitude: -73.9841249380499,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/c34ca47e-e375-4b9f-a8d7-f9737566b783/image',
  },
  {
    id: '606916f2-cd00-4893-9d2b-4c9f9d6d974f',
    name: 'AVE C @ 18 St',
    latitude: 40.7316,
    longitude: -73.9742,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/606916f2-cd00-4893-9d2b-4c9f9d6d974f/image',
  },
  {
    id: '66810a94-7065-4f6e-b306-3d3088930d89',
    name: '11 Ave/Rt 9A @ 14 St',
    latitude: 40.7418271531205,
    longitude: -74.0087985992431,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/66810a94-7065-4f6e-b306-3d3088930d89/image',
  },
  {
    id: '4589cc19-b5b5-4696-a199-20f753ec74c4',
    name: 'C5-GCP-14_WB_at_76th_Road-Ex13',
    latitude: 40.71676,
    longitude: -73.830245,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/4589cc19-b5b5-4696-a199-20f753ec74c4/image',
  },
  {
    id: 'd4bbce49-b087-4524-a835-08cb253926a7',
    name: '10 Ave @ 57 St',
    latitude: 40.769126,
    longitude: -73.98858,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/d4bbce49-b087-4524-a835-08cb253926a7/image',
  },
  {
    id: '63bf5db0-582d-4482-ad51-52338c7f9906',
    name: '3 Ave @ 14 St',
    latitude: 40.733275,
    longitude: -73.987279,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/63bf5db0-582d-4482-ad51-52338c7f9906/image',
  },
  {
    id: '2191c11c-1757-4938-a608-a2c6ae0e6486',
    name: '9 Ave @ 30 St',
    latitude: 40.7501505126346,
    longitude: -73.9978981018066,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/2191c11c-1757-4938-a608-a2c6ae0e6486/image',
  },
  {
    id: 'b6847d0c-ee18-409e-a3b8-e68f8365047c',
    name: 'West St @ Clarkson',
    latitude: 40.729832,
    longitude: -74.010658,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/b6847d0c-ee18-409e-a3b8-e68f8365047c/image',
  },
  {
    id: '98c2de4e-fa0c-41d0-b1ea-6d1df833d792',
    name: 'Allan St (1 Ave) @ Houston St (B)',
    latitude: 40.72289,
    longitude: -73.988622,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/98c2de4e-fa0c-41d0-b1ea-6d1df833d792/image',
  },
  {
    id: '46181c0e-f2ae-4daa-8a94-74dd5b2bbc19',
    name: 'QBB NOR @ York Ave',
    latitude: 40.759134,
    longitude: -73.959401,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/46181c0e-f2ae-4daa-8a94-74dd5b2bbc19/image',
  },
  {
    id: 'e4767b49-3611-4be2-895f-1fc03261653b',
    name: 'MHB-33 Bklyn LRW @ Ex Ramp',
    latitude: 40.6981774995555,
    longitude: -73.9865255355835,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/e4767b49-3611-4be2-895f-1fc03261653b/image',
  },
  {
    id: '9c4194e4-adfb-4a35-a4ef-c8411459545b',
    name: 'Northern Blvd @ 61 St',
    latitude: 40.75391,
    longitude: -73.901201,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/9c4194e4-adfb-4a35-a4ef-c8411459545b/image',
  },
  {
    id: 'dfac53ae-0460-409d-8514-6db67de9aff3',
    name: 'Bronx River Pkwy @ 233 St',
    latitude: 40.89481,
    longitude: -73.86174,
    area: 'Bronx',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/dfac53ae-0460-409d-8514-6db67de9aff3/image',
  },
  {
    id: '3309fba1-cc5f-483a-92bc-7d85951f1558',
    name: 'FDR Dr @ Old Slip',
    latitude: 40.703095,
    longitude: -74.007681,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/3309fba1-cc5f-483a-92bc-7d85951f1558/image',
  },
  {
    id: '6232350a-c27c-4964-a6e8-7bd0507b6826',
    name: 'C2-BQE-27-EB_at_Mtrpolitan_Av-Ex32',
    latitude: 40.713701,
    longitude: -73.95327,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/6232350a-c27c-4964-a6e8-7bd0507b6826/image',
  },
  {
    id: '322bbce7-5011-43b2-9e3d-54eac839a3b6',
    name: 'BB-54 South East Brooklyn Tower',
    latitude: 40.70403,
    longitude: -73.994422,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/322bbce7-5011-43b2-9e3d-54eac839a3b6/image',
  },
  {
    id: '1a626331-3c36-48bd-91a5-edd930c314c0',
    name: 'C1-MDE-12-SB_at_Heath_Ave-Ex9',
    latitude: 40.867065,
    longitude: -73.908921,
    area: 'Bronx',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/1a626331-3c36-48bd-91a5-edd930c314c0/image',
  },
  {
    id: '64862ed3-03e3-4452-9e59-189dbeec4a4f',
    name: 'BB-22 BQE @ Old Fulton St',
    latitude: 40.701565,
    longitude: -73.992009,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/64862ed3-03e3-4452-9e59-189dbeec4a4f/image',
  },
  {
    id: 'ebac5b6e-bd3a-4046-926b-7446edab9bee',
    name: '3 Ave @ E 14 St',
    latitude: 40.733504,
    longitude: -73.987239,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/ebac5b6e-bd3a-4046-926b-7446edab9bee/image',
  },
  {
    id: '5c2b7782-2fb8-486f-89d2-0c16b6eac70c',
    name: 'BB-15 North Rdwy @ Manhattan Anchorage',
    latitude: 40.708574,
    longitude: -74.000112,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/5c2b7782-2fb8-486f-89d2-0c16b6eac70c/image',
  },
  {
    id: 'c1efff60-5e94-42c4-b16d-0a4e2acd9e1b',
    name: 'MHB-31 Bklyn N URW @ Anch',
    latitude: 40.7030577937025,
    longitude: -73.9884996414184,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/c1efff60-5e94-42c4-b16d-0a4e2acd9e1b/image',
  },
  {
    id: '4f688c33-672c-4bac-bf2b-98438d464ccd',
    name: 'BB-25 North Rdwy @ West of Manhattan Twr',
    latitude: 40.707558,
    longitude: -73.998581,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/4f688c33-672c-4bac-bf2b-98438d464ccd/image',
  },
  {
    id: '3809d95f-f99e-4eca-9121-9c7db73f8cbd',
    name: '12 Ave @ 34 St',
    latitude: 40.7562948244548,
    longitude: -74.0045070648193,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/3809d95f-f99e-4eca-9121-9c7db73f8cbd/image',
  },
  {
    id: 'bbb18d1b-f37a-4482-b8bf-7b79f9e7ab2f',
    name: 'BB-52 South West Brooklyn Tower',
    latitude: 40.704071,
    longitude: -73.994462,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/bbb18d1b-f37a-4482-b8bf-7b79f9e7ab2f/image',
  },
  {
    id: '32651453-d9de-4cde-af4b-be42b8de2775',
    name: 'BB-39 North Rdwy @ Bridge Midspan',
    latitude: 40.7060356,
    longitude: -73.9966579,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/32651453-d9de-4cde-af4b-be42b8de2775/image',
  },
  {
    id: '769a2e94-5bbc-4a03-86a7-39d3a70213f7',
    name: 'Broadway @ 96 St',
    latitude: 40.794668,
    longitude: -73.971788,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/769a2e94-5bbc-4a03-86a7-39d3a70213f7/image',
  },
  {
    id: '23994d9e-7e59-4808-8d47-405f779d19cf',
    name: '1 Ave @ 14 St',
    latitude: 40.731361,
    longitude: -73.982486,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/23994d9e-7e59-4808-8d47-405f779d19cf/image',
  },
  {
    id: '3d8e276f-b179-414d-a506-679d5e559d3e',
    name: 'Broadway @ 51 St',
    latitude: 40.762077539856,
    longitude: -73.9836422756604,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/3d8e276f-b179-414d-a506-679d5e559d3e/image',
  },
  {
    id: '5e0c441b-7587-494c-aade-6fea9efc1c73',
    name: 'Malcolm X Blvd/Lenox Ave @ 110 St/CPN',
    latitude: 40.798238,
    longitude: -73.952408,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/5e0c441b-7587-494c-aade-6fea9efc1c73/image',
  },
  {
    id: 'b18d0e36-c053-435d-921e-813ab5f65a0a',
    name: 'C2-BQE-22-WB_at_Lee_Ave-Ex31',
    latitude: 40.705248,
    longitude: -73.959172,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/b18d0e36-c053-435d-921e-813ab5f65a0a/image',
  },
  {
    id: 'bcafb919-3f51-4caa-b964-d6888ed4cecf',
    name: 'BQE @ Atlantic Ave Exit - westbound',
    latitude: 40.691879,
    longitude: -73.999426,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/bcafb919-3f51-4caa-b964-d6888ed4cecf/image',
  },
  {
    id: 'b6369867-aa5f-4df3-8af3-dcac2eb0dfc8',
    name: 'Canal St @ Broadway',
    latitude: 40.719655,
    longitude: -74.001842,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/b6369867-aa5f-4df3-8af3-dcac2eb0dfc8/image',
  },
  {
    id: 'f0e5c9aa-7700-4918-834f-c106189bde4b',
    name: '1 Ave @ 42 St',
    latitude: 40.7488254014022,
    longitude: -73.9698439596283,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/f0e5c9aa-7700-4918-834f-c106189bde4b/image',
  },
  {
    id: '5352e130-4668-4be5-a7b9-9e1ce4ea6d4c',
    name: '3 Ave @ 42 St',
    latitude: 40.7507631595424,
    longitude: -73.9744615986273,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/5352e130-4668-4be5-a7b9-9e1ce4ea6d4c/image',
  },
  {
    id: '1eb66413-6761-4eb0-bc04-e2533bb74b42',
    name: 'Madison Ave @ 49 St',
    latitude: 40.7572361824409,
    longitude: -73.9760573417802,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/1eb66413-6761-4eb0-bc04-e2533bb74b42/image',
  },
  {
    id: 'a9979a0c-71f2-4f5e-a87c-4d29c1104d5c',
    name: 'WBB-6A South Rdwy @ Delancey St & Clinton St',
    latitude: 40.717485,
    longitude: -73.985361,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/a9979a0c-71f2-4f5e-a87c-4d29c1104d5c/image',
  },
  {
    id: '3fa07801-69d7-4d21-a807-4156b1b6602a',
    name: 'Hamilton Ave @ Hamilton Pl @ 15 St (N SR)',
    latitude: 40.669201,
    longitude: -73.99665,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/3fa07801-69d7-4d21-a807-4156b1b6602a/image',
  },
  {
    id: '33aa3bec-8143-421c-a0f7-866a2feaa352',
    name: 'QBB SOR @ W Channel',
    latitude: 40.757855,
    longitude: -73.957152,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/33aa3bec-8143-421c-a0f7-866a2feaa352/image',
  },
  {
    id: 'f2a7f677-64db-4dd9-9810-82e4910c7799',
    name: '5 Ave @ 84 St',
    latitude: 40.780233,
    longitude: -73.961397,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/f2a7f677-64db-4dd9-9810-82e4910c7799/image',
  },
  {
    id: '96f64a79-929b-4f8e-b160-306313054dec',
    name: 'BB-51A Brooklyn Tower - South Rdwy',
    latitude: 40.704131,
    longitude: -73.994659,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/96f64a79-929b-4f8e-b160-306313054dec/image',
  },
  {
    id: '1aa06d0b-9acb-4642-b7c2-aa7e45eb6122',
    name: 'Rt. 9A @ Morris North - 104.100:80',
    latitude: 40.706699,
    longitude: -74.015881,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/1aa06d0b-9acb-4642-b7c2-aa7e45eb6122/image',
  },
  {
    id: 'f8dec92a-babd-4547-99d1-3808ee61ce79',
    name: 'C3-SIE-14-WB_at_Hyland_Blvd_Ex14',
    latitude: 40.606423,
    longitude: -74.077846,
    area: 'Staten Island',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/f8dec92a-babd-4547-99d1-3808ee61ce79/image',
  },
  {
    id: '843a0580-a31d-4e5b-90c5-c3875afdfa96',
    name: '3rd Camera North Bound BPU',
    latitude: 40.7024957,
    longitude: -74.0157618,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/843a0580-a31d-4e5b-90c5-c3875afdfa96/image',
  },
  {
    id: '5c4582a7-6492-41ac-9bac-fa872878117b',
    name: 'West st and Fulton',
    latitude: 40.71303,
    longitude: -74.014039,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/5c4582a7-6492-41ac-9bac-fa872878117b/image',
  },
  {
    id: '0e8def41-11e2-45de-a8f6-b746b805b7c5',
    name: 'BB-72 South Rdwy @ Front St',
    latitude: 40.702461,
    longitude: -73.992372,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/0e8def41-11e2-45de-a8f6-b746b805b7c5/image',
  },
  {
    id: '15f7a00b-5afb-4193-a5e4-dfe7710a5dfe',
    name: '3 AVE @ 34 ST',
    latitude: 40.7457272953698,
    longitude: -73.9781169718397,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/15f7a00b-5afb-4193-a5e4-dfe7710a5dfe/image',
  },
  {
    id: '8385d983-6782-4219-8aab-98f26b224f9d',
    name: '1 st Camera South Bound BPU-148.55',
    latitude: 40.70414,
    longitude: -74.01667,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/8385d983-6782-4219-8aab-98f26b224f9d/image',
  },
  {
    id: 'c145d543-b5f5-4dec-9bb8-7866eafdf054',
    name: 'Exterior St @ 3 Ave',
    latitude: 40.809314,
    longitude: -73.929538,
    area: 'Bronx',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/c145d543-b5f5-4dec-9bb8-7866eafdf054/image',
  },
  {
    id: 'ebec9de9-3f56-477a-a413-2e0a09b2b6ba',
    name: 'Worth Street @ Lafayette Street',
    latitude: 40.715579,
    longitude: -74.003036,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/ebec9de9-3f56-477a-a413-2e0a09b2b6ba/image',
  },
  {
    id: '326b2bab-d277-4c5a-9778-a7af791ad151',
    name: '9 Ave @ 37 St',
    latitude: 40.7552720843545,
    longitude: -73.9948547204017,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/326b2bab-d277-4c5a-9778-a7af791ad151/image',
  },
  {
    id: '2e5f0c0e-575d-4323-86ec-63e75acbf129',
    name: 'QBB UL CM @ Roosevelt',
    latitude: 40.7561973001307,
    longitude: -73.9546823501586,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/2e5f0c0e-575d-4323-86ec-63e75acbf129/image',
  },
  {
    id: 'e278de5c-4cfa-46e7-aa85-59512db61f0d',
    name: 'FDR Dr @ 23 St',
    latitude: 40.7348035082712,
    longitude: -73.9746809005737,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/e278de5c-4cfa-46e7-aa85-59512db61f0d/image',
  },
  {
    id: 'd425def0-9a1e-4d35-a604-17959a195892',
    name: 'BB-28 North West Manhattan Tower',
    latitude: 40.707339,
    longitude: -73.998294,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/d425def0-9a1e-4d35-a604-17959a195892/image',
  },
  {
    id: 'fcde67cd-f29e-40c6-8f84-1f3a336315c4',
    name: 'C1-MDE-13-SB_at_Van_Cortlandt-Ex11',
    latitude: 40.88608,
    longitude: -73.896686,
    area: 'Bronx',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/fcde67cd-f29e-40c6-8f84-1f3a336315c4/image',
  },
  {
    id: 'b55781b8-827c-40e3-b094-27c289d22f7a',
    name: '10 Ave @ 42 St',
    latitude: 40.759663,
    longitude: -73.995317,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/b55781b8-827c-40e3-b094-27c289d22f7a/image',
  },
  {
    id: 'c18f480c-e7a9-494b-b435-26adb0d9f881',
    name: 'C2-BQE-29_WB_at_Morgan_Street',
    latitude: 40.722951,
    longitude: -73.939997,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/c18f480c-e7a9-494b-b435-26adb0d9f881/image',
  },
  {
    id: '50f6fd7d-bd90-4d15-8ce4-c0e8ae63515a',
    name: 'BB-52A Brooklyn Tower - North Rdwy',
    latitude: 40.704173,
    longitude: -73.994281,
    area: 'Brooklyn',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/50f6fd7d-bd90-4d15-8ce4-c0e8ae63515a/image',
  },
  {
    id: '9b923606-16ba-45ad-a105-aabcc98ef1fa',
    name: '12 Ave @ 22 St',
    latitude: 40.7477121362911,
    longitude: -74.0078973770141,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/9b923606-16ba-45ad-a105-aabcc98ef1fa/image',
  },
  {
    id: '444aa32f-8102-4ca6-a7f8-5c9fd8fd5571',
    name: 'Houston St @ Christies St',
    latitude: 40.724006,
    longitude: -73.990992,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/444aa32f-8102-4ca6-a7f8-5c9fd8fd5571/image',
  },
  {
    id: '78292730-3cfe-4f84-a6f7-d438f684849a',
    name: 'Northern Blvd @ Junction Blvd',
    latitude: 40.756845,
    longitude: -73.873712,
    area: 'Queens',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/78292730-3cfe-4f84-a6f7-d438f684849a/image',
  },
  {
    id: '34616ac5-0cc5-4b86-ac7a-82c77238a536',
    name: 'West st and Chambers',
    latitude: 40.717179,
    longitude: -74.012897,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/34616ac5-0cc5-4b86-ac7a-82c77238a536/image',
  },
  {
    id: '8d7e94a5-7a81-4e92-8171-9f6c0f0ca7bf',
    name: 'FDR @ E 53 St',
    latitude: 40.754739,
    longitude: -73.96219,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/8d7e94a5-7a81-4e92-8171-9f6c0f0ca7bf/image',
  },
  {
    id: '536e3949-f21d-4fa1-b395-8827e812e689',
    name: '5 Ave @ 65 St',
    latitude: 40.768025,
    longitude: -73.970282,
    area: 'Manhattan',
    isOnline: 'true',
    imageUrl:
      'https://webcams.nyctmc.org/api/cameras/536e3949-f21d-4fa1-b395-8827e812e689/image',
  },
];

export default cameras;
