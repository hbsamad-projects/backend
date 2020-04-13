module.exports = (qualification) => {

    const usage = {
      "1":"Flotte à usage professionnel et personnel",
      "2":"Parking en copropriété",
      "3":"Parking en maison individuelle",
      "4":"Parking public"
    };

    const s_enedis = {
      "1":"C1",
      "2":"C2",
      "3":"C3",
      "4":"C4",
      "5":"C5"
    };

    const billing_conditions = {
      "1":"A définir",
      "2":"Flotte d'entreprise",
      "3":"Public",
      "4":"Privé"
    };

    const station_type = {
      "1":"A définir",
      "2":"Autostart",
      "3":"Contrôle d'accès"
    };

    const signalling = {
      "1":"A définir",
      "2":"Oui",
      "3":"Non"
    };

    const installation_type = {
      "1":"A définir",
      "2":"Simple",
      "3":"Complexe"
    };

    const allowed_access_days = {
      "1":"Jours ouvrés uniquement",
      "2":"Weekend uniquement",
      "3":"Toute la semaine"
    };

    const charging_time = {
      "1":"Moins d'une heure",
      "2":"Moins de trois heures",
      "3":"Moins de cinq heures",
      "4":"Plus de cinq heures"
    };



    return `
    <!doctype html>
    <html>

    <head>
      <meta charset="utf-8">
      <title>Qualification</title>
      <style>
        html,
        body,
        div,
        h1,
        h2,
        h3,
        p,
        blockquote,
        ul,
        ol,
        li,
        pre {
          margin: 0;
          padding: 0
        }

        li {
          margin-left: 1.5em
        }

        @page {
          size: a4;
          margin: 10mm
        }

        @media screen {
          body {
            margin: 5em
          }
        }

        body {
          font-family: Lato,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
          font-size: 8pt;
          padding: 0 0 0.1em;
        }

        q {
          font-style: italic
        }

        h1 {
          font-size: 3em;
          padding: 0 0 3em
        }

        h2,
        h3 {
          font-size: 1em;
          color: #005FAA;
          margin: 0.2em 0 0.1em;
        }

        p,
        li {
          margin: 0.2em 0 0.4em;
        }

        ul,
        ol {
          margin: 0.2em 0 0.4em 1.5em
        }

        a {
          text-decoration: none;
          color: inherit
        }

        address {
          white-space: pre;
          padding: 0 0 0.2em;
          font-style: normal
        }

        aside {
          float: right;
          width: 20em;
        }

        footer {
          float: bottom;
          text-align: center
        }

        .content-table {
          border-collapse: collapse;
          margin: 25px 0;
          font-size: 0.9em;
          min-width: 300px;
          border-radius: 5px 5px 0 0;
          overflow: hidden;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
        }

        .content-table thead tr {
          background-color: #37B9C3;
          color: white;
          text-align: left;
          font-weight: bold;
        }

        .content-table th,
        .content-table td {
          padding: 4px 5px;
        }

        .content-table tbody tr {
          border-bottom: 1px solid #dddddd;
        }

        .content-table tbody tr:nth-of-type(even) {
          background-color: #f3f3f3;
        }

        .content-table tbody tr:last-of-type {
          border-bottom: 2px solid #37B9C3;
        }

        .container {
          position: absolute;
          top: 150px;
          margin: 1em;
          padding: 1em
        }

        .logo {
          width: 150px;
          top: 10px;
          left: 10px;
          position: absolute;
        }

        .from {
          top: 70px;
          left: 10px;
          position: absolute;
        }
      </style>
    </head>

    <body>
      <aside>
        <address>
          <b>${qualification.corporatename}</b>
          <b>(${qualification.siret})</b>
          <br />
          ${qualification.sitename}
          ${qualification.street}
          ${qualification.city}
          ${qualification.code}
          ${qualification.country}
          <br />
          <b>${qualification.contact.firstname} ${qualification.contact.lastname}</b>
          ${qualification.contact.phone}
          ${qualification.contact.email}
        </address>
      </aside>

        <image class="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/ENGIE_logotype_2018.png/320px-ENGIE_logotype_2018.png">
        <address class="from">
          Engie GBS
          14 Rue Touzet Gaillard,
          93400 Saint-Ouen
          www.engie.fr
          09 63 60 97 50
        </address>
        <div class="container">
          <h3>1. Identification du projet</h3>
          <table class="content-table">
            <thead>
              <tr>
                <th>Usage</th>
                <th>Numéro de PDL</th>
                <th>Segment ENEDIS</th>
                <th>Précisions le cas échéant</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${usage[qualification.usage]}</td>
                <td>${qualification.pdl}</td>
                <td>${s_enedis[qualification.s_enedis]}</td>
                <td>${qualification.project_ad_inf}</td>
              </tr>
            </tbody>
          </table>
          <h3>2. Documents à joindre pour administration du dossier</h3>
          <table class="content-table">
            <tbody>
              <thead>
                <tr>
                  <th>Copie de la dernière facture d'électricité</th>
                  <th>RIB</th>
                  <th>Plan de prévention travaux</th>
                  <th>Autorisation par mail</th>
                </tr>
              </thead>
            <tbody>
              <tr>
                <td>${(qualification.documents.elec_bill == "1")?"Oui":"Non"}</td>
                <td>${(qualification.documents.rib == "1")?"Oui":"Non"}</td>
                <td>${(qualification.documents.works_plan == "1")?"Oui":"Non"}</td>
                <td>${(qualification.documents.authorization == "1")?"Oui":"Non"}</td>
              </tr>
            </tbody>
            </tbody>
          </table>
          <h3>3. Nombre de bornes souhaitées</h3>
          <table class="content-table">
            <thead>
              <tr>
                <th>Borne simple 7,4kW</th>
                <th>Borne double 7,4kW</th>
                <th>Borne simple 22kW</th>
                <th>Borne double 22kW</th>
                <th>Borne 7,4kW en copropriété</th>
                <th>Autres, précisez</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${qualification.charger_needs.nb_s_7kw_c}</td>
                <td>${qualification.charger_needs.nb_d_7kw_c}</td>
                <td>${qualification.charger_needs.nb_s_22kw_c}</td>
                <td>${qualification.charger_needs.nb_d_22kw_c}</td>
                <td>${qualification.charger_needs.nb_sh_7kw_c}</td>
                <td>${qualification.charger_needs.other_data}</td>
              </tr>
            </tbody>
          </table>
          <h3>4. Besoins à définir</h3>
          <table class="content-table">
            <thead>
              <tr>
                <th>Temps de charge acceptable pour 100km</th>
                <th>Nombre de véhicules électriques</th>
                <th>Nombre de charges par jour et par véhicule</th>
                <th>Jours d'accès à la recharge</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${charging_time[qualification.other_needs.charging_time]}</td>
                <td>${qualification.other_needs.nb_vehicules}</td>
                <td>${qualification.other_needs.nb_charges}</td>
                <td>${allowed_access_days[qualification.other_needs.allowed_access_days]}</td>
              </tr>
            </tbody>
          </table>
          <h3>5. Autres informations</h3>
          <table class="content-table">
            <thead>
              <tr>
                <th>Type de pose</th>
                <th>Signalisation</th>
                <th>Type de borne</th>
                <th>Condition de facturation à la recharge</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${installation_type[qualification.other_information.installation_type]}</td>
                <td>${signalling[qualification.other_information.signalling]}</td>
                <td>${station_type[qualification.other_information.station_type]}</td>
                <td>${billing_conditions[qualification.other_information.billing_conditions]}</td>
              </tr>
            </tbody>
          </table>

          <table class="content-table">
            <thead>
              <tr>
                <th>Commentaires</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${qualification.comments}</td>
              </tr>
            </tbody>
          </table>
          <h3>6. Conditions de réalisation des travaux</h3>
          <table class="content-table">
            <thead>
              <tr>
                <th>Date souhaitée de visite technique</th>
                <th>Date souhaitée de l'installation</th>
                <th>Restrictions d'accès</th>
                <th>Plan de prévention pour les travaux</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td>${qualification.works_conditions.access_restrictions}</td>
                <td>${qualification.works_conditions.prevention_plan}</td>
              </tr>
            </tbody>
          </table>
        </div>

    </html>

    `;
};