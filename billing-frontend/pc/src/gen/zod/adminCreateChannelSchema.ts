import { z } from "zod"

export const adminCreateChannelSchema = z.object({
  id: z.number().readonly().optional(),
  group_name: z.string().readonly().optional(),
  group_id: z.number(),
  order: z.number().min(0).max(2147483647).describe(`We usualy order a model in a client and an admin part.`).optional(),
  is_active: z.boolean().describe(`This entry is visible or unvisible for a client part or admin part.`).optional(),
  is_deleted: z.boolean().optional(),
  created_date: z.string().datetime().readonly().describe(`Show when an entry was created.`).optional(),
  modified_date: z.string().datetime().readonly().describe(`Show when an entry was updated`).optional(),
  csv_channel_id: z.number().readonly().optional(),
  csv_group_id: z.number().min(-2147483648).max(2147483647).optional(),
  name: z.string().min(1).max(255),
  name_translit: z.string().max(255).nullish(),
  url: z.string().min(1).readonly().optional(),
  tvg_logo: z.string().max(20).nullish(),
  mode: z.string().max(20).nullish(),
  sid: z.string().max(30).nullish(),
  tsid: z.string().max(30).nullish(),
  onid: z.string().max(30).nullish(),
  ns: z.string().max(30).nullish(),
  external_id: z.string().max(30).nullish(),
  is_hidden: z.boolean().optional(),
  is_archived: z.boolean().optional(),
  ordering_id: z.number().optional(),
  disabled_countries: z.array(
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
  sip_name: z.string().max(255).nullish(),
  sip_tvgid: z.string().max(100).nullish(),
  ott_name: z.string().max(255).nullish(),
  ott_tvgid: z.string().max(100).nullish(),
})
