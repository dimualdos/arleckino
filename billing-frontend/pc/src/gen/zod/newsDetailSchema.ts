import { newsImageSchema } from "./newsImageSchema"
import { z } from "zod"

export const newsDetailSchema = z.object({
  id: z.number().readonly().optional(),
  created_date: z.string().readonly().optional(),
  title: z.string().min(1).max(128),
  short_text: z.string().nullish(),
  text: z.string().min(1),
  link: z.string().max(200).nullish(),
  date_end: z.string().nullish(),
  is_country: z.boolean().optional(),
  country: z.array(
    z.enum([
      `AF`,
      `AL`,
      `DZ`,
      `AD`,
      `AO`,
      `AI`,
      `AQ`,
      `AR`,
      `AM`,
      `AW`,
      `AU`,
      `AT`,
      `AZ`,
      `BH`,
      `BD`,
      `BB`,
      `BY`,
      `BE`,
      `BZ`,
      `BJ`,
      `BT`,
      `BO`,
      `BW`,
      `BR`,
      `BN`,
      `BG`,
      `BI`,
      `KH`,
      `CM`,
      `CA`,
      `TD`,
      `CL`,
      `CN`,
      `CO`,
      `CG`,
      `HR`,
      `CU`,
      `CW`,
      `CY`,
      `CZ`,
      `DK`,
      `DJ`,
      `DM`,
      `EC`,
      `EG`,
      `SV`,
      `ER`,
      `EE`,
      `SZ`,
      `ET`,
      `FJ`,
      `FI`,
      `FR`,
      `GA`,
      `GM`,
      `GE`,
      `DE`,
      `GH`,
      `GI`,
      `GR`,
      `GL`,
      `GD`,
      `GP`,
      `GU`,
      `GT`,
      `GG`,
      `GN`,
      `GY`,
      `HT`,
      `HN`,
      `HK`,
      `HU`,
      `IS`,
      `IN`,
      `ID`,
      `IR`,
      `IQ`,
      `IE`,
      `IL`,
      `IT`,
      `JM`,
      `JP`,
      `JE`,
      `JO`,
      `KZ`,
      `KE`,
      `KI`,
      `KW`,
      `KG`,
      `LA`,
      `LV`,
      `LB`,
      `LS`,
      `LR`,
      `LY`,
      `LI`,
      `LT`,
      `LU`,
      `MO`,
      `MG`,
      `MW`,
      `MY`,
      `MV`,
      `ML`,
      `MT`,
      `MQ`,
      `MR`,
      `MU`,
      `YT`,
      `MX`,
      `MD`,
      `MC`,
      `MN`,
      `ME`,
      `MS`,
      `MA`,
      `MZ`,
      `MM`,
      `NA`,
      `NR`,
      `NP`,
      `NL`,
      `NI`,
      `NE`,
      `NG`,
      `NU`,
      `MK`,
      `NO`,
      `OM`,
      `PK`,
      `PW`,
      `PA`,
      `PY`,
      `PE`,
      `PH`,
      `PN`,
      `PL`,
      `PT`,
      `QA`,
      `RE`,
      `RO`,
      `RU`,
      `RW`,
      `WS`,
      `SN`,
      `RS`,
      `SG`,
      `SK`,
      `SI`,
      `SO`,
      `ES`,
      `SD`,
      `SR`,
      `SE`,
      `CH`,
      `SY`,
      `TW`,
      `TJ`,
      `TZ`,
      `TH`,
      `TG`,
      `TK`,
      `TO`,
      `TN`,
      `TR`,
      `TM`,
      `TV`,
      `UG`,
      `UA`,
      `UY`,
      `UZ`,
      `VU`,
      `VE`,
      `VN`,
      `YE`,
      `ZM`,
      `ZW`,
      `AX`,
      `AS`,
      `BS`,
      `BM`,
      `BV`,
      `KY`,
      `CF`,
      `CX`,
      `KM`,
      `CK`,
      `DO`,
      `GQ`,
      `FO`,
      `GF`,
      `PF`,
      `VA`,
      `IM`,
      `KP`,
      `KR`,
      `MH`,
      `NC`,
      `NZ`,
      `NF`,
      `SA`,
      `SC`,
      `SB`,
      `ZA`,
      `SS`,
      `GB`,
      `EH`,
      `AG`,
      `BA`,
      `TF`,
      `MP`,
      `TT`,
      `AE`,
      `US`,
      `WF`,
      `TC`,
      `UM`,
      `IO`,
      `HM`,
      `GS`,
      `VG`,
      `VI`,
      `MF`,
      `SX`,
      `SJ`,
      `CD`,
      `FM`,
      `CC`,
      `FK`,
      `SH`,
      `SM`,
      `PS`,
      `BQ`,
      `BF`,
      `CV`,
      `CR`,
      `GW`,
      `PR`,
      `BL`,
      `LC`,
      `SL`,
      `LK`,
      `TL`,
      `PG`,
      `KN`,
      `PM`,
      `VC`,
      `ST`,
      `CI`,
    ]),
  ),
  is_news_pages: z.boolean().optional(),
  is_pushes: z.boolean().optional(),
  is_send_email: z.boolean().optional(),
  images: z.array(z.lazy(() => newsImageSchema)).optional(),
})
