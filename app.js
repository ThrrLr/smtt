const content = {
  equipes: ["Équipes", "Les compositions, calendriers et résultats des équipes seront ajoutés ici."],
  videos: ["Vidéos", "Les vidéos et les directs YouTube du club seront accessibles ici."],
  facebook: ["Facebook", "Le lien vers la page Facebook du club sera ajouté ici."],
  whatsapp: ["WhatsApp", "Les liens d'invitation vers les groupes WhatsApp seront ajoutés ici."],
  calendrier: ["Calendrier", "Le calendrier des entraînements et compétitions sera intégré ici."],
  helloasso: ["HelloAsso", "Le lien HelloAsso du club sera ajouté ici."],
  documents: ["Documents", "Les documents utiles aux licenciés seront rangés ici."],
  liens: [
    "Liens externes",
    `Accédez directement aux sites officiels des instances :
    <div style="display:grid;gap:10px;margin-top:12px;">
      <a class="tile" href="https://lnatt.fr" target="_blank" rel="noopener noreferrer" style="min-height:auto;padding:14px;">
        <strong>🌐 Ligue Nouvelle-Aquitaine (LNATT)</strong>
        <small>Compétitions régionales, règlements et actualités</small>
      </a>
      <a class="tile" href="https://cd40tt.com" target="_blank" rel="noopener noreferrer" style="min-height:auto;padding:14px;">
        <strong>🏓 Comité des Landes (CD40TT)</strong>
        <small>Critérium départemental et championnats des Landes</small>
      </a>
    </div>`
  ]
};

document.querySelectorAll("[data-section]").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    const [title, description] = content[link.dataset.section];
    document.querySelector("#panel").innerHTML = `<h2>${title}</h2><p>${description}</p>`;
    document.querySelector("#panel").scrollIntoView({behavior:"smooth",block:"nearest"});
  });
});
