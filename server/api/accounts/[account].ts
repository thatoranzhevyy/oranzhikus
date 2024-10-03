export default defineEventHandler((event) => {
  const account = getRouterParam(event, 'account')
  const accounts = [
    {
      "id": "9d0a719f-feff-49b0-9172-97e234007279",
      "name": "Charley Zemlak",
      "password_expired": 0,
      "email": null,
      "username": "larkin.bart",
      "email_verified_at": "2024-09-18T17:50:14.000000Z",
      "created_at": "2024-09-18T17:50:15.000000Z",
      "updated_at": "2024-09-18T17:50:15.000000Z"
    },
    {
      "id": "9d0a71a0-03cb-49a2-9f0e-4353b92fc0b5",
      "name": "Mr. Robb Kuvalis",
      "password_expired": 0,
      "email": null,
      "username": "katlynn96",
      "email_verified_at": "2024-09-18T17:50:15.000000Z",
      "created_at": "2024-09-18T17:50:15.000000Z",
      "updated_at": "2024-09-18T17:50:15.000000Z"
    },
    {
      "id": "9d0a71a0-056d-4f70-9147-b511e1a181b2",
      "name": "Hildegard Kuphal",
      "password_expired": 0,
      "email": null,
      "username": "agnes.paucek",
      "email_verified_at": "2024-09-18T17:50:15.000000Z",
      "created_at": "2024-09-18T17:50:15.000000Z",
      "updated_at": "2024-09-18T17:50:15.000000Z"
    },
    {
      "id": "9d0a71a0-070b-4eff-9430-6ef7fda9188f",
      "name": "Enid Abernathy",
      "password_expired": 0,
      "email": null,
      "username": "molly.dubuque",
      "email_verified_at": "2024-09-18T17:50:15.000000Z",
      "created_at": "2024-09-18T17:50:15.000000Z",
      "updated_at": "2024-09-18T17:50:15.000000Z"
    },
    {
      "id": "9d0a71a0-0884-4012-91ea-1507d533586a",
      "name": "Francis Kshlerin",
      "password_expired": 0,
      "email": null,
      "username": "clare.rodriguez",
      "email_verified_at": "2024-09-18T17:50:15.000000Z",
      "created_at": "2024-09-18T17:50:15.000000Z",
      "updated_at": "2024-09-18T17:50:15.000000Z"
    },
    {
      "id": "9d0a71a0-0a0f-40af-ae4c-a1bb30403884",
      "name": "Mr. Arely Beer",
      "password_expired": 0,
      "email": null,
      "username": "billie.senger",
      "email_verified_at": "2024-09-18T17:50:15.000000Z",
      "created_at": "2024-09-18T17:50:15.000000Z",
      "updated_at": "2024-09-18T17:50:15.000000Z"
    },
    {
      "id": "9d0a71a0-0b94-4ec0-a1bb-21926f7f362d",
      "name": "Dr. Torrey Barrows DDS",
      "password_expired": 0,
      "email": null,
      "username": "georgiana.ortiz",
      "email_verified_at": "2024-09-18T17:50:15.000000Z",
      "created_at": "2024-09-18T17:50:15.000000Z",
      "updated_at": "2024-09-18T17:50:15.000000Z"
    },
    {
      "id": "9d0a71a0-0d6f-4a60-b005-b2308d9960e8",
      "name": "Prof. Dolly Fritsch II",
      "password_expired": 0,
      "email": null,
      "username": "schaefer.zakary",
      "email_verified_at": "2024-09-18T17:50:15.000000Z",
      "created_at": "2024-09-18T17:50:15.000000Z",
      "updated_at": "2024-09-18T17:50:15.000000Z"
    },
    {
      "id": "9d0a71a0-104c-4734-ac5c-278fd9ece95f",
      "name": "Antonetta Simonis",
      "password_expired": 0,
      "email": null,
      "username": "barrows.judge",
      "email_verified_at": "2024-09-18T17:50:15.000000Z",
      "created_at": "2024-09-18T17:50:15.000000Z",
      "updated_at": "2024-09-18T17:50:15.000000Z"
    },
    {
      "id": "9d0a71a0-1358-4e5e-96bd-e368aeb082a9",
      "name": "Arnulfo Ruecker",
      "password_expired": 0,
      "email": null,
      "username": "gladys79",
      "email_verified_at": "2024-09-18T17:50:15.000000Z",
      "created_at": "2024-09-18T17:50:15.000000Z",
      "updated_at": "2024-09-18T17:50:15.000000Z"
    },
    {
      "id": "9d0a71a0-158f-42a8-8aa9-8de013a3fe83",
      "name": "Delphia Kihn",
      "password_expired": 0,
      "email": null,
      "username": "dorothea.weimann",
      "email_verified_at": "2024-09-18T17:50:15.000000Z",
      "created_at": "2024-09-18T17:50:15.000000Z",
      "updated_at": "2024-09-18T17:50:15.000000Z"
    },
    {
      "id": "9d0a71a0-1782-4ff0-b78a-672f0d0a5d4a",
      "name": "Presley Kris",
      "password_expired": 0,
      "email": null,
      "username": "leonel11",
      "email_verified_at": "2024-09-18T17:50:15.000000Z",
      "created_at": "2024-09-18T17:50:15.000000Z",
      "updated_at": "2024-09-18T17:50:15.000000Z"
    },
    {
      "id": "9d0a71a0-1957-42fc-8eb4-5a2d6b475360",
      "name": "Dr. Alexander Murazik",
      "password_expired": 0,
      "email": null,
      "username": "roscoe83",
      "email_verified_at": "2024-09-18T17:50:15.000000Z",
      "created_at": "2024-09-18T17:50:15.000000Z",
      "updated_at": "2024-09-18T17:50:15.000000Z"
    },
    {
      "id": "9d0a71a0-1b4f-44e6-8b3f-dea90bbc031e",
      "name": "Dr. Hugh Howe",
      "password_expired": 0,
      "email": null,
      "username": "alexie.hills",
      "email_verified_at": "2024-09-18T17:50:15.000000Z",
      "created_at": "2024-09-18T17:50:15.000000Z",
      "updated_at": "2024-09-18T17:50:15.000000Z"
    },
    {
      "id": "9d0a71a0-1f59-4790-8992-e7c316ca7879",
      "name": "Prof. Fredy Orn",
      "password_expired": 0,
      "email": null,
      "username": "heaney.devin",
      "email_verified_at": "2024-09-18T17:50:15.000000Z",
      "created_at": "2024-09-18T17:50:15.000000Z",
      "updated_at": "2024-09-18T17:50:15.000000Z"
    },
    {
      "id": "9d0a71a0-22ca-494a-8eee-aa4e910f095f",
      "name": "Nathaniel Metz",
      "password_expired": 0,
      "email": null,
      "username": "medhurst.abigayle",
      "email_verified_at": "2024-09-18T17:50:15.000000Z",
      "created_at": "2024-09-18T17:50:15.000000Z",
      "updated_at": "2024-09-18T17:50:15.000000Z"
    },
    {
      "id": "9d0a71a0-24ae-4c1f-90ef-847b10e7aedd",
      "name": "Abbie Bauch",
      "password_expired": 0,
      "email": null,
      "username": "aubrey28",
      "email_verified_at": "2024-09-18T17:50:15.000000Z",
      "created_at": "2024-09-18T17:50:15.000000Z",
      "updated_at": "2024-09-18T17:50:15.000000Z"
    },
    {
      "id": "9d0a71a0-275a-45ea-a3c1-5b9f96eb0b77",
      "name": "Marcelle Walker",
      "password_expired": 0,
      "email": null,
      "username": "viva.volkman",
      "email_verified_at": "2024-09-18T17:50:15.000000Z",
      "created_at": "2024-09-18T17:50:15.000000Z",
      "updated_at": "2024-09-18T17:50:15.000000Z"
    },
    {
      "id": "9d0a71a0-294e-4b46-92c3-c2ecf71233ba",
      "name": "Prof. Emerald McGlynn",
      "password_expired": 0,
      "email": null,
      "username": "lilliana33",
      "email_verified_at": "2024-09-18T17:50:15.000000Z",
      "created_at": "2024-09-18T17:50:15.000000Z",
      "updated_at": "2024-09-18T17:50:15.000000Z"
    },
    {
      "id": "9d0a71a0-2ae2-481c-8524-6f7c35e64e58",
      "name": "Prof. Astrid Johnson",
      "password_expired": 0,
      "email": null,
      "username": "syble.davis",
      "email_verified_at": "2024-09-18T17:50:15.000000Z",
      "created_at": "2024-09-18T17:50:15.000000Z",
      "updated_at": "2024-09-18T17:50:15.000000Z"
    },
    {
      "id": "9d0a71a0-2cdb-4bf9-b602-8734e355843c",
      "name": "Noel Hand",
      "password_expired": 0,
      "email": null,
      "username": "ashley.krajcik",
      "email_verified_at": "2024-09-18T17:50:15.000000Z",
      "created_at": "2024-09-18T17:50:15.000000Z",
      "updated_at": "2024-09-18T17:50:15.000000Z"
    },
    {
      "id": "9d0a71a0-2e75-4fd1-baf9-6eddeb8fddd0",
      "name": "Laurine Spencer",
      "password_expired": 0,
      "email": null,
      "username": "kuhic.zena",
      "email_verified_at": "2024-09-18T17:50:15.000000Z",
      "created_at": "2024-09-18T17:50:15.000000Z",
      "updated_at": "2024-09-18T17:50:15.000000Z"
    },
    {
      "id": "9d0a71a0-2fb2-42f2-aabb-8798fc98c147",
      "name": "Colby Hodkiewicz",
      "password_expired": 0,
      "email": null,
      "username": "cayla99",
      "email_verified_at": "2024-09-18T17:50:15.000000Z",
      "created_at": "2024-09-18T17:50:15.000000Z",
      "updated_at": "2024-09-18T17:50:15.000000Z"
    },
    {
      "id": "9d0a71a0-3112-427a-ae9f-64b29280e8fd",
      "name": "Florine Gleichner",
      "password_expired": 0,
      "email": null,
      "username": "kelley93",
      "email_verified_at": "2024-09-18T17:50:15.000000Z",
      "created_at": "2024-09-18T17:50:15.000000Z",
      "updated_at": "2024-09-18T17:50:15.000000Z"
    },
    {
      "id": "9d0a71a1-b986-4806-a5b9-c166e3633ef5",
      "name": "Frog King Millionaire",
      "password_expired": 0,
      "email": "thatoranzhevyy@gmail.com",
      "username": "test",
      "email_verified_at": "2024-09-18T17:50:16.000000Z",
      "created_at": "2024-09-18T17:50:16.000000Z",
      "updated_at": "2024-09-18T17:56:44.000000Z"
    }
  ]
  return accounts.filter(obj => obj.username === account)[0]
})