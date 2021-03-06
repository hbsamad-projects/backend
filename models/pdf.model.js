var moment = require('moment');
module.exports = (qualification) => {

    const usage = {
      "1":"Bornes pour flotte d'entreprise sur parking privé",
      "2":"Partagé en résidentiel collectif",
      "3":"Individuel en résidentiel collectif",
      "4":"Bornes accessibles au public sur voiries",
      "5":"Bornes accessibles au public sur parking privé"
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
            margin: 1em
          }
        }

        body {
          font-family: Lato,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
          font-size: 10px;
          padding: 0 0 0.1em;
        }

        ul li {
          display: flex;
          margin-bottom: 10px;
          align-items: center;
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

        table {
          width: 600px;
          align-items: flex-start;
          align-content: flex-start;
          justify-content: flex-start;

        }
        table tr td{
          height: 200px;
          width: 300px;
          text-align: left;
          align-items: flex-start;
          align-content: flex-start;
          justify-content: flex-start;
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

        .semi-bold {
          font-weight: 500;
        }

        .bold {
          font-weight: 700;
          font-size: 12px;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .title {
          margin-bottom: 20px;
        }
        .data{
          color: #333;
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
          <div class="semi-bold">
            Identifiant :
          </div>
          <div class="data">
            ${qualification.uniqid}
          </div>
          <br />
          <table>
            <tbody>
            <tr>
              <td>
                <div class="resume">
                  <div class="title">
                    <p class="bold">Identification du projet</p>
                  <div>
                  <ul>
                     <li>
                       <div class="semi-bold">
                         Usage :
                       </div>
                       <div class="data">
                         ${usage[qualification.usage]}
                       </div>
                     </li>
                     <li>
                       <div class="semi-bold">
                         Numéro de PDL :
                       </div>
                       <div class="data">
                         ${qualification.pdl}
                       </div>
                     </li>
                     <li>
                       <div class="semi-bold">
                         Segment ENEDIS :
                       </div>
                       <div class="data">
                         ${s_enedis[qualification.s_enedis]}
                       </div>
                     </li>
                     <li>
                       <div class="semi-bold">
                         Précisions le cas échéant :
                       </div>
                       <div class="data">
                         ${qualification.project_ad_inf}
                       </div>
                     </li>
                   </ul>
               </div>
              </td>
              <td>
                <div class="resume">
                  <div class="title">
                    <p class="bold">Documents à joindre</p>
                  <div>
                  <ul>
                     <li>
                       <div class="semi-bold">
                         Copie de la dernière facture d'électricité :
                       </div>
                       <div class="data">
                         ${(qualification.documents.elec_bill)?"Oui":"Non"}
                       </div>
                     </li>
                     <li>
                       <div class="semi-bold">
                         RIB :
                       </div>
                       <div class="data">
                         ${(qualification.documents.rib)?"Oui":"Non"}
                       </div>
                     </li>
                     <li>
                       <div class="semi-bold">
                         Plan de prévention travaux :
                       </div>
                       <div class="data">
                         ${(qualification.documents.works_plan)?"Oui":"Non"}
                       </div>
                     </li>
                     <li>
                       <div class="semi-bold">
                         Autorisation par mail :
                       </div>
                       <div class="data">
                         ${(qualification.documents.authorization)?"Oui":"Non"}
                       </div>
                     </li>
                   </ul>
               </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="resume">
                  <div class="title">
                    <p class="bold">Besoins</p>
                  <div>
                  <ul>
                     <li>
                       <div class="semi-bold">
                         Temps de charge acceptable pour 100km :
                       </div>
                       <div class="data">
                         ${charging_time[qualification.other_needs.charging_time]}
                       </div>
                     </li>
                     <li>
                       <div class="semi-bold">
                         Nombre de véhicules électriques :
                       </div>
                       <div class="data">
                         ${qualification.other_needs.nb_vehicules}
                       </div>
                     </li>
                     <li>
                       <div class="semi-bold">
                         Nombre de charges par jour et par véhicule :
                       </div>
                       <div class="data">
                         ${qualification.other_needs.nb_charges}
                       </div>
                     </li>
                     <li>
                       <div class="semi-bold">
                         Jours d'accès à la recharge :
                       </div>
                       <div class="data">
                         ${allowed_access_days[qualification.other_needs.allowed_access_days]}
                       </div>
                     </li>
                   </ul>
               </div>
              </td>
              <td>
                <div class="resume">
                  <div class="title">
                    <p class="bold">Nombre de bornes souhaitées</p>
                  <div>
                  <ul>
                     <li>
                       <div class="semi-bold">
                         Borne simple 7,4kW :
                       </div>
                       <div class="data">
                         ${qualification.charger_needs.nb_s_7kw_c}
                       </div>
                     </li>
                     <li>
                       <div class="semi-bold">
                         Borne double 7,4kW :
                       </div>
                       <div class="data">
                         ${qualification.charger_needs.nb_d_7kw_c}
                       </div>
                     </li>
                     <li>
                       <div class="semi-bold">
                         Borne simple 22kW :
                       </div>
                       <div class="data">
                         ${qualification.charger_needs.nb_s_22kw_c}
                       </div>
                     </li>
                     <li>
                       <div class="semi-bold">
                         Borne double 22kW :
                       </div>
                       <div class="data">
                         ${qualification.charger_needs.nb_d_22kw_c}
                       </div>
                     </li>
                     <li>
                       <div class="semi-bold">
                         Borne 7,4kW en copropriété :
                       </div>
                       <div class="data">
                         ${qualification.charger_needs.nb_sh_7kw_c}
                       </div>
                     </li>
                     <li>
                       <div class="semi-bold">
                         Autres, précisez :
                       </div>
                       <div class="data">
                         ${qualification.charger_needs.other_data}
                       </div>
                     </li>
                   </ul>
               </div
              </td>
            </tr>
            <tr>
              <td>
                <div class="resume">
                  <div class="title">
                    <p class="bold">Autres informations</p>
                  <div>
                  <ul>
                     <li>
                       <div class="semi-bold">
                         Type de pose :
                       </div>
                       <div class="data">
                         ${installation_type[qualification.other_information.installation_type]}
                       </div>
                     </li>
                     <li>
                       <div class="semi-bold">
                         Signalisation :
                       </div>
                       <div class="data">
                         ${signalling[qualification.other_information.signalling]}
                       </div>
                     </li>
                     <li>
                       <div class="semi-bold">
                         Type de borne :
                       </div>
                       <div class="data">
                         ${station_type[qualification.other_information.station_type]}
                       </div>
                     </li>
                     <li>
                       <div class="semi-bold">
                         Condition de facturation à la recharge :
                       </div>
                       <div class="data">
                         ${billing_conditions[qualification.other_information.billing_conditions]}
                       </div>
                     </li>
                     <li>
                       <div class="semi-bold">
                         Commentaires :
                       </div>
                       <div class="data">
                         ${qualification.comments}
                       </div>
                     </li>
                   </ul>
               </div>
              </td>
              <td>
                <div class="resume">
                  <div class="title">
                    <p class="bold">Conditions de réalisation des travaux</p>
                  <div>
                  <ul>
                     <li>
                       <div class="semi-bold">
                         Date souhaitée de visite technique :
                       </div>
                       <div class="data">
                         ${moment(qualification.works_conditions.technical_visite_date).format("MM/DD/YYYY")}
                       </div>
                     </li>
                     <li>
                       <div class="semi-bold">
                         Date souhaitée de l'installation :
                       </div>
                       <div class="data">
                         ${moment(qualification.works_conditions.installation_date).format("MM/DD/YYYY")}
                       </div>
                     </li>
                     <li>
                       <div class="semi-bold">
                         Restrictions d'accès :
                       </div>
                       <div class="data">
                         ${qualification.works_conditions.access_restrictions}
                       </div>
                     </li>
                     <li>
                       <div class="semi-bold">
                         Plan de prévention pour les travaux :
                       </div>
                       <div class="data">
                         ${qualification.works_conditions.prevention_plan}
                       </div>
                     </li>
                   </ul>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        </div>

    </html>

    `;
};
