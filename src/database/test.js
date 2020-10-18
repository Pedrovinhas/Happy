const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {

    //inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-12.9015883",
        lng:"-38.5603173",
        name: "Lar das meninas",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "98889787",
        images: [
            "https://images.unsplash.com/photo-1600711725407-2ea4733a38c3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para compartilhar.",
        opening_hours: "Horário de visitas das 18h às 8h",
        open_on_weekends: "0"

    })

    //consultar dados na tabela
     const selectedOrphanages =await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //consultar somente 1 orphanato, pelo id
     const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1" ') 
     console.log(orphanage)

    // //deletar dado da tabela 
    // console.log(await db.run("DELETE FROM orphanages WHERE id = '4' "))
    // console.log(await db.run("DELETE FROM orphanages WHERE id = '5' "))

})