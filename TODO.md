# 📚 Front-end development

## Common
- <Spinner /> with delay
- <Button />
- querystring to form
- suspense
- react-query
- code-splitting
- ssr (gatsby?)
- sessione su server con redis invece di localstorage?
- jss vs plain css
- server components
- debug bundle size
- assets statici
- gestione env

# <Form />
- date
- multiselect
- autocomplete
- nested object
- checkbox/switch with label top/left/right
- media upload trick con l'hidden, multipart, e preview

# Layout and theming

- resetter, typography, layout, form, buttons, spacing
- <https://blueprintcss.dev/>
- <https://www.npmjs.com/package/animate-css-grid>
- <https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines>
- <https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Realizing_common_layouts_using_CSS_Grid_Layout>
- responsive images: picture, srcset..
- <https://reactnicedates.hernansartorio.com> (ma usa css invece di jss e date-fns invece di dayjs)
- colori/bordi tramite data-color invece di stare a scrivere ogni volta bg-color + color + fill + borders + shadow
- data-color-scheme (per bg + color / fill) se preimpostati
- tiporafia tramite data-font invece di font-family + font-weight 
- link stilati come bottoni tramite data-button

# <Table />
- <https://react-window.vercel.app/#/examples/list/fixed-size>
- <https://bvaughn.github.io/react-virtualized/#/components/List>
- se modifico/elimino un elemento non rifare fetch
- responsività: mediaquery? evitare di avere due tipi di tabelle
- inset subgrid per dati nestati?
- selection delle righe per azioni bulk
- columns con user.amount.eur che fa get della path
- edit/add => swipeable views https://react-swipeable-views.com + history per fare back alla vista prima

# Coding
- testing
- nomenclatura: UserList, UserListItem, UserForm, UserCard

# FE architecture
- customer, admin, superadmin
- parcel
- jss: resetter, typography, layout, form, buttons, spacing
- design kit: spacing (padding and margin), input e bottoni con stato focus, hover, disabled, readonly, async loading, placeholder
- redux, i18n
- sharable urls: ogni pagina raggiungibile tramite url (compreso state necessario in querystring e viceversa, occhio ad array che vanno registrati e nullable)
- recharts per kpi e admin
- routing: private, public
- tooling csv, sheet copy/paste, export
- storybook

# Common feature
- auth: signup, signin, recover password
- mailing: templating
- uploading: presigned urls and chunked uploading
- payments: paypal intents
- i18n: locale detection, location detection, formatting of dates, numbers, currency (dayjs, cleavejs)
- spinner, icons
- controlli: select, multiselect, autocomplete, date/time picker (eg: prefissi telefono e formato numero, comuni, indirizzo casa)
- dynamic content: markdown
- responsive images: picture and srcset

# Tools
- git: branch, tag, pr and squash merge
- npm version, semver, nvm
- bash, interpolation, env, curl, jq, docker, ssh + pem, jwt

# ~~Pippe~~ SEO
- prerendering is needed: <https://www.youtube.com/watch?v=PFwUbgvpdaQ&t=1332s&ab_channel=GoogleSearchCentral>
- usare le history api: <https://youtu.be/PFwUbgvpdaQ?t=515>
- googlebot si impegna a renderare il javascript ma non puo garantirlo: <https://youtu.be/PFwUbgvpdaQ?t=845>
- googlebot è identificabile mobile e desktop: <https://youtu.be/PFwUbgvpdaQ?t=1513>
- googlebot (da evergreen) usa l'ultima versione di chromium: <https://youtu.be/PFwUbgvpdaQ?t=1525> => <https://webmasters.googleblog.com/2019/05/the-new-evergreen-googlebot.html>
- googlebot ha il localStorage disattivato
- url pulite e univoche, http codes, metadata, canonical tags
- tempi e dimensioni contano ai fini del render
- sitemap.yml
- robots.txt

# README anatomy
- Overview: goal of software, problem solved, stakeholders, external resources and documentation
- Architecture
- Development: how to develop, list of assumptions on developer machine
- Deployment: how to deploy, CI explained
- Monitoring: active (observation of running processes) and passive (observation of side effects)
- Nota Bene: hard-to-understand choices and shady internals
- Troubleshooting: FAQ style, typical user question and how to quickly debug

# Project Management
- intervista cliente e stackholders: problema (percepito) e soluzione
- conceptboard UX e flussi cliente (?)
- mocks con regole css (figma, zeplin)
- agreement sui contatti: singolo (possibilmente) referente lato cliente su prodotto che riporta al PM
- agreement strumenti di comunicazione e task tracking cliente (email, slack, asana, whatsapp)
- agreement strumenti di comunicazione e task tracking team (email, slack, asana, whatsapp)
- agreement compatibilita browser/device e risoluzioni supportate
- agreement release cycle, tasklist per priorità/effort
- agreement data ultima per attendere consegna materiale client (eg: template emails, infografiche, foto)
- agreement pagamenti, importi e date

# Prodotto, UX e Design
- design: se prodotto è responsive allora sempre mobile first
- design, regola di consistenza: se su desktop è popover, su mobile non puo essere view. o entrambi view o entrambi popover
- design, regola di consistenza: su mobile non esiste mouseover, esiste solo click/tap
- design, regola di perf: 1 solo font rigorosamente typeface
- cognitive load: chiedersi per ogni elemento dell'interfaccia: a cosa serve? perchè è qui? due tipi di elemento: get dell'informazione o azione (vai all'informazione, data-entry, cta). tutto il resto è fuffa. info da intellegire o azione da comprendere, via il superfluo.
- regole snackbar, errore contestuale a dove viene generato con "istruzioni per fixare" no messaggi generici
- regole popover/popup, passare a swipeable views per essere mobile compliant
- form: settare aspettative utente, perchè chiedo questo dato? cosa impatta un dato valore?
- form: sforzo cognitivo, processing sequenziale, errori più possibile sincroni all'avvenimento e dare info su come risolverli 
- form: se l'utente da questa informazione 1) dove sarà visualizzabile 2) cosa viene mostrato quando non è fornita 3) cosa viene mostrato finchè non è caricata

# Task tracking
- esistono feature e bug
- chi segnala un bug deve riportare 1) come riprodurlo 2) risultato attuale 3) risultato atteso
- chi completa una feature deve riportare come può essere verificato/testato
- chi non completa un task in attesa di specifiche (di prodotto o tecniche) e lo mette "on hold" deve mettere in condizione chi deve prendere la decisione di decidere
- priorità: P0/high/medium/low
- effort: s/m/l/xl
- stato: on hold, in progress, ready to test => tested OK | tested KO, deployed, won't fix