export const operations = {
  api_v1_actions_admin_groups_list: { path: "/api/v1/actions/admin/groups", method: "get" },
  api_v1_actions_admin_groups_create: { path: "/api/v1/actions/admin/groups", method: "post" },
  api_v1_actions_admin_groups_read: { path: "/api/v1/actions/admin/groups/:id/", method: "get" },
  api_v1_actions_admin_groups_update: { path: "/api/v1/actions/admin/groups/:id/", method: "put" },
  api_v1_actions_admin_groups_partial_update: { path: "/api/v1/actions/admin/groups/:id/", method: "patch" },
  api_v1_actions_admin_groups_delete: { path: "/api/v1/actions/admin/groups/:id/", method: "delete" },
  api_v1_actions_admin_logs_list: { path: "/api/v1/actions/admin/logs/", method: "get" },
  api_v1_actions_admin_logs_group_read: { path: "/api/v1/actions/admin/logs/group/:groupId", method: "get" },
  api_v1_actions_admin_logs_type_read: { path: "/api/v1/actions/admin/logs/type/:actionTypeId", method: "get" },
  api_v1_actions_admin_logs_type_status_read: { path: "/api/v1/actions/admin/logs/type/:actionTypeId/status/:actionStatusTypeId", method: "get" },
  api_v1_actions_admin_logs_user_read: { path: "/api/v1/actions/admin/logs/user/:userId", method: "get" },
  api_v1_actions_admin_types_list: { path: "/api/v1/actions/admin/types/", method: "get" },
  api_v1_actions_admin_types_read: { path: "/api/v1/actions/admin/types/:id/", method: "get" },
  api_v1_actions_admin_types_update: { path: "/api/v1/actions/admin/types/:id/", method: "put" },
  api_v1_actions_admin_types_partial_update: { path: "/api/v1/actions/admin/types/:id/", method: "patch" },
  api_v1_actions_user_groups_list: { path: "/api/v1/actions/user/groups/", method: "get" },
  api_v1_actions_user_logs_list: { path: "/api/v1/actions/user/logs/", method: "get" },
  api_v1_actions_user_logs_all_list: { path: "/api/v1/actions/user/logs/all/", method: "get" },
  api_v1_actions_user_logs_group_read: { path: "/api/v1/actions/user/logs/group/:groupId", method: "get" },
  "api_v1_auth_account-confirm-email_create": { path: "/api/v1/auth/account-confirm-email/", method: "post" },
  api_v1_auth_confirm_resend_create: { path: "/api/v1/auth/confirm/resend/", method: "post" },
  "api_v1_auth_confirm_sign-up-complete_read": { path: "/api/v1/auth/confirm/sign-up-complete/:key/", method: "get" },
  api_v1_auth_facebook_create: { path: "/api/v1/auth/facebook/", method: "post" },
  api_v1_auth_google_create: { path: "/api/v1/auth/google/", method: "post" },
  api_v1_auth_password_change_create: { path: "/api/v1/auth/password/change/:uidb64/:token/", method: "post" },
  api_v1_auth_password_reset_create: { path: "/api/v1/auth/password/reset/", method: "post" },
  "api_v1_auth_sign-in_create": { path: "/api/v1/auth/sign-in/", method: "post" },
  "api_v1_auth_sign-out_create": { path: "/api/v1/auth/sign-out/", method: "post" },
  "api_v1_auth_sign-up_create": { path: "/api/v1/auth/sign-up/", method: "post" },
  api_v1_auth_token_refresh_create: { path: "/api/v1/auth/token/refresh/", method: "post" },
  api_v1_auth_validate_email_create: { path: "/api/v1/auth/validate/email/", method: "post" },
  "api_v1_auth_validate_password-change-token_create": { path: "/api/v1/auth/validate/password-change-token/", method: "post" },
  "api_v1_auth_validate_referral-token_create": { path: "/api/v1/auth/validate/referral-token/", method: "post" },
  api_v1_billing_admin_payment_system_create_create: { path: "/api/v1/billing/admin/payment/system/create/", method: "post" },
  api_v1_billing_admin_payment_system_list_list: { path: "/api/v1/billing/admin/payment/system/list/", method: "get" },
  api_v1_billing_admin_payment_system_read: { path: "/api/v1/billing/admin/payment/system/:id/", method: "get" },
  api_v1_billing_admin_payment_system_update: { path: "/api/v1/billing/admin/payment/system/:id/", method: "put" },
  api_v1_billing_admin_payment_system_partial_update: { path: "/api/v1/billing/admin/payment/system/:id/", method: "patch" },
  api_v1_billing_admin_payment_system_disable_create: { path: "/api/v1/billing/admin/payment/system/:id/disable/", method: "post" },
  api_v1_billing_admin_payment_system_enable_create: { path: "/api/v1/billing/admin/payment/system/:id/enable/", method: "post" },
  api_v1_billing_admin_payment_system_hide_create: { path: "/api/v1/billing/admin/payment/system/:id/hide/", method: "post" },
  api_v1_billing_admin_payment_system_show_create: { path: "/api/v1/billing/admin/payment/system/:id/show/", method: "post" },
  api_v1_billing_admin_payment_transaction_aggregate_list: { path: "/api/v1/billing/admin/payment/transaction/aggregate/", method: "get" },
  api_v1_billing_admin_payment_transaction_create_create: { path: "/api/v1/billing/admin/payment/transaction/create/", method: "post" },
  api_v1_billing_admin_payment_transaction_list_list: { path: "/api/v1/billing/admin/payment/transaction/list/", method: "get" },
  api_v1_billing_admin_payment_transaction_read: { path: "/api/v1/billing/admin/payment/transaction/:id/", method: "get" },
  api_v1_billing_payment_system_list_list: { path: "/api/v1/billing/payment/system/list/", method: "get" },
  api_v1_billing_payment_system_read: { path: "/api/v1/billing/payment/system/:id/", method: "get" },
  api_v1_billing_payment_transaction_create_create: { path: "/api/v1/billing/payment/transaction/create/", method: "post" },
  api_v1_billing_payment_transaction_list_list: { path: "/api/v1/billing/payment/transaction/list/", method: "get" },
  api_v1_billing_payment_transaction_read: { path: "/api/v1/billing/payment/transaction/:id/", method: "get" },
  api_v1_billing_payment_transaction_confirm_list: { path: "/api/v1/billing/payment/transaction/:payment_system_id/confirm/", method: "get" },
  "api_v1_db_templates_admin_email-templates_list": { path: "/api/v1/db_templates/admin/email-templates/", method: "get" },
  "api_v1_db_templates_admin_email-templates_create": { path: "/api/v1/db_templates/admin/email-templates/", method: "post" },
  "api_v1_db_templates_admin_email-templates_images_create": { path: "/api/v1/db_templates/admin/email-templates/images/", method: "post" },
  "api_v1_db_templates_admin_email-templates_images_delete": { path: "/api/v1/db_templates/admin/email-templates/images/:id/", method: "delete" },
  "api_v1_db_templates_admin_email-templates_read": { path: "/api/v1/db_templates/admin/email-templates/:id/", method: "get" },
  "api_v1_db_templates_admin_email-templates_update": { path: "/api/v1/db_templates/admin/email-templates/:id/", method: "put" },
  "api_v1_db_templates_admin_email-templates_partial_update": { path: "/api/v1/db_templates/admin/email-templates/:id/", method: "patch" },
  "api_v1_db_templates_admin_email-templates_delete": { path: "/api/v1/db_templates/admin/email-templates/:id/", method: "delete" },
  api_v1_db_templates_admin_languages_list: { path: "/api/v1/db_templates/admin/languages/", method: "get" },
  "api_v1_db_templates_admin_template-contents_read": { path: "/api/v1/db_templates/admin/template-contents/:id/", method: "get" },
  "api_v1_db_templates_admin_template-contents_update": { path: "/api/v1/db_templates/admin/template-contents/:id/", method: "put" },
  "api_v1_db_templates_admin_template-contents_partial_update": { path: "/api/v1/db_templates/admin/template-contents/:id/", method: "patch" },
  api_v1_db_templates_admin_templates_list: { path: "/api/v1/db_templates/admin/templates/", method: "get" },
  api_v1_db_templates_admin_templates_images_create: { path: "/api/v1/db_templates/admin/templates/images/", method: "post" },
  api_v1_db_templates_admin_templates_images_delete: { path: "/api/v1/db_templates/admin/templates/images/:id/", method: "delete" },
  "api_v1_db_templates_admin_templates_test-sending-email_create": { path: "/api/v1/db_templates/admin/templates/test-sending-email/", method: "post" },
  api_v1_db_templates_admin_templates_read: { path: "/api/v1/db_templates/admin/templates/:id/", method: "get" },
  api_v1_db_templates_admin_templates_update: { path: "/api/v1/db_templates/admin/templates/:id/", method: "put" },
  api_v1_db_templates_admin_templates_partial_update: { path: "/api/v1/db_templates/admin/templates/:id/", method: "patch" },
  api_v1_db_templates_languages_list: { path: "/api/v1/db_templates/languages/", method: "get" },
  api_v1_faq_admin_image_create: { path: "/api/v1/faq/admin/image/", method: "post" },
  api_v1_faq_admin_image_delete: { path: "/api/v1/faq/admin/image/:id/", method: "delete" },
  api_v1_faq_admin_list_list: { path: "/api/v1/faq/admin/list/", method: "get" },
  api_v1_faq_admin_list_create: { path: "/api/v1/faq/admin/list/", method: "post" },
  api_v1_faq_admin_tags_list: { path: "/api/v1/faq/admin/tags/", method: "get" },
  api_v1_faq_admin_tags_create: { path: "/api/v1/faq/admin/tags/", method: "post" },
  api_v1_faq_admin_tags_read: { path: "/api/v1/faq/admin/tags/:id/", method: "get" },
  api_v1_faq_admin_tags_update: { path: "/api/v1/faq/admin/tags/:id/", method: "put" },
  api_v1_faq_admin_tags_partial_update: { path: "/api/v1/faq/admin/tags/:id/", method: "patch" },
  api_v1_faq_admin_tags_delete: { path: "/api/v1/faq/admin/tags/:id/", method: "delete" },
  api_v1_faq_admin_read: { path: "/api/v1/faq/admin/:id/", method: "get" },
  api_v1_faq_admin_update: { path: "/api/v1/faq/admin/:id/", method: "put" },
  api_v1_faq_admin_partial_update: { path: "/api/v1/faq/admin/:id/", method: "patch" },
  api_v1_faq_admin_delete: { path: "/api/v1/faq/admin/:id/", method: "delete" },
  api_v1_faq_list_list: { path: "/api/v1/faq/list/", method: "get" },
  api_v1_faq_tags_list: { path: "/api/v1/faq/tags/", method: "get" },
  api_v1_faq_read: { path: "/api/v1/faq/:id/", method: "get" },
  api_v1_faq_view_create: { path: "/api/v1/faq/:id/view/", method: "post" },
  api_v1_helpdesk_cases_list: { path: "/api/v1/helpdesk/cases/", method: "get" },
  api_v1_helpdesk_cases_create: { path: "/api/v1/helpdesk/cases/", method: "post" },
  "api_v1_helpdesk_cases_copyright-holder_create": { path: "/api/v1/helpdesk/cases/copyright-holder/", method: "post" },
  api_v1_helpdesk_cases_faq_create: { path: "/api/v1/helpdesk/cases/faq/", method: "post" },
  "api_v1_helpdesk_cases_omnidesk-webhook_create": { path: "/api/v1/helpdesk/cases/omnidesk-webhook/", method: "post" },
  "api_v1_helpdesk_cases_unread-message_read": { path: "/api/v1/helpdesk/cases/unread-message/", method: "get" },
  api_v1_helpdesk_cases_close_create: { path: "/api/v1/helpdesk/cases/:case_id/close/", method: "post" },
  api_v1_helpdesk_cases_messages_list: { path: "/api/v1/helpdesk/cases/:case_id/messages/", method: "get" },
  api_v1_helpdesk_cases_messages_create: { path: "/api/v1/helpdesk/cases/:case_id/messages/", method: "post" },
  api_v1_helpdesk_cases_reading_create: { path: "/api/v1/helpdesk/cases/:case_id/reading/", method: "post" },
  "api_v1_iptv_admin_channel-group_list_list": { path: "/api/v1/iptv/admin/channel-group/list/", method: "get" },
  "api_v1_iptv_admin_channel-group_list_create": { path: "/api/v1/iptv/admin/channel-group/list/", method: "post" },
  "api_v1_iptv_admin_channel-group_list_delete": { path: "/api/v1/iptv/admin/channel-group/list/", method: "delete" },
  "api_v1_iptv_admin_channel-group_read": { path: "/api/v1/iptv/admin/channel-group/:id/", method: "get" },
  "api_v1_iptv_admin_channel-group_update": { path: "/api/v1/iptv/admin/channel-group/:id/", method: "put" },
  "api_v1_iptv_admin_channel-group_partial_update": { path: "/api/v1/iptv/admin/channel-group/:id/", method: "patch" },
  "api_v1_iptv_admin_channel-group_delete": { path: "/api/v1/iptv/admin/channel-group/:id/", method: "delete" },
  "api_v1_iptv_admin_channel-group_drag-and-drop_create": { path: "/api/v1/iptv/admin/channel-group/:id/drag-and-drop/", method: "post" },
  api_v1_iptv_admin_channel_list_list: { path: "/api/v1/iptv/admin/channel/list/", method: "get" },
  api_v1_iptv_admin_channel_list_create: { path: "/api/v1/iptv/admin/channel/list/", method: "post" },
  api_v1_iptv_admin_channel_list_delete: { path: "/api/v1/iptv/admin/channel/list/", method: "delete" },
  api_v1_iptv_admin_channel_read: { path: "/api/v1/iptv/admin/channel/:id/", method: "get" },
  api_v1_iptv_admin_channel_update: { path: "/api/v1/iptv/admin/channel/:id/", method: "put" },
  api_v1_iptv_admin_channel_partial_update: { path: "/api/v1/iptv/admin/channel/:id/", method: "patch" },
  api_v1_iptv_admin_channel_delete: { path: "/api/v1/iptv/admin/channel/:id/", method: "delete" },
  "api_v1_iptv_admin_channel_drag-and-drop_create": { path: "/api/v1/iptv/admin/channel/:id/drag-and-drop/", method: "post" },
  "api_v1_iptv_admin_export-channel_list": { path: "/api/v1/iptv/admin/export-channel/", method: "get" },
  "api_v1_iptv_admin_import-channel_get-data_create": { path: "/api/v1/iptv/admin/import-channel/get-data/", method: "post" },
  "api_v1_iptv_admin_import-channel_import_create": { path: "/api/v1/iptv/admin/import-channel/import/", method: "post" },
  "api_v1_iptv_admin_import-channel_validate_create": { path: "/api/v1/iptv/admin/import-channel/validate/", method: "post" },
  "api_v1_iptv_admin_playlist-types_list": { path: "/api/v1/iptv/admin/playlist-types/", method: "get" },
  "api_v1_iptv_playlist-os_list": { path: "/api/v1/iptv/playlist-os/", method: "get" },
  api_v1_iptv_playlist_channels_list: { path: "/api/v1/iptv/playlist/channels/", method: "get" },
  api_v1_iptv_playlist_list_list: { path: "/api/v1/iptv/playlist/list/", method: "get" },
  api_v1_iptv_playlist_list_create: { path: "/api/v1/iptv/playlist/list/", method: "post" },
  api_v1_iptv_playlist_read: { path: "/api/v1/iptv/playlist/:id/", method: "get" },
  api_v1_iptv_playlist_update: { path: "/api/v1/iptv/playlist/:id/", method: "put" },
  api_v1_iptv_playlist_partial_update: { path: "/api/v1/iptv/playlist/:id/", method: "patch" },
  api_v1_iptv_playlist_delete: { path: "/api/v1/iptv/playlist/:id/", method: "delete" },
  api_v1_iptv_playlist_bind_device_create: { path: "/api/v1/iptv/playlist/:id/bind_device/:device_pk/", method: "post" },
  api_v1_iptv_playlist_groups_list: { path: "/api/v1/iptv/playlist/:playlist_pk/groups/", method: "get" },
  api_v1_iptv_playlist_groups_create: { path: "/api/v1/iptv/playlist/:playlist_pk/groups/", method: "post" },
  api_v1_iptv_playlist_groups_hide_update: { path: "/api/v1/iptv/playlist/:playlist_pk/groups/:id/hide/", method: "put" },
  api_v1_iptv_playlist_groups_hide_partial_update: { path: "/api/v1/iptv/playlist/:playlist_pk/groups/:id/hide/", method: "patch" },
  "api_v1_iptv_playlist_groups_channels_drag-and-drop_create": { path: "/api/v1/iptv/playlist/:playlist_pk/groups/:group_pk/channels/:id/drag-and-drop/", method: "post" },
  api_v1_iptv_playlist_groups_channels_hide_update: { path: "/api/v1/iptv/playlist/:playlist_pk/groups/:id/channels/hide/", method: "put" },
  api_v1_iptv_playlist_groups_channels_hide_partial_update: { path: "/api/v1/iptv/playlist/:playlist_pk/groups/:id/channels/hide/", method: "patch" },
  api_v1_iptv_playlist_groups_channels_move_update: { path: "/api/v1/iptv/playlist/:playlist_pk/groups/:group_pk/channels/:id/move", method: "put" },
  api_v1_iptv_playlist_groups_channels_move_partial_update: { path: "/api/v1/iptv/playlist/:playlist_pk/groups/:group_pk/channels/:id/move", method: "patch" },
  api_v1_iptv_playlist_groups_read: { path: "/api/v1/iptv/playlist/:playlist_pk/groups/:id/", method: "get" },
  api_v1_iptv_playlist_groups_update: { path: "/api/v1/iptv/playlist/:playlist_pk/groups/:id/", method: "put" },
  api_v1_iptv_playlist_groups_partial_update: { path: "/api/v1/iptv/playlist/:playlist_pk/groups/:id/", method: "patch" },
  api_v1_iptv_playlist_groups_delete: { path: "/api/v1/iptv/playlist/:playlist_pk/groups/:id/", method: "delete" },
  "api_v1_iptv_playlist_groups_drag-and-drop_create": { path: "/api/v1/iptv/playlist/:playlist_pk/groups/:id/drag-and-drop/", method: "post" },
  api_v1_news_admin_image_create: { path: "/api/v1/news/admin/image/", method: "post" },
  api_v1_news_admin_image_delete: { path: "/api/v1/news/admin/image/:id/", method: "delete" },
  api_v1_news_admin_list_list: { path: "/api/v1/news/admin/list/", method: "get" },
  api_v1_news_admin_list_create: { path: "/api/v1/news/admin/list/", method: "post" },
  api_v1_news_admin_read: { path: "/api/v1/news/admin/:id/", method: "get" },
  api_v1_news_admin_update: { path: "/api/v1/news/admin/:id/", method: "put" },
  api_v1_news_admin_partial_update: { path: "/api/v1/news/admin/:id/", method: "patch" },
  api_v1_news_admin_delete: { path: "/api/v1/news/admin/:id/", method: "delete" },
  api_v1_news_list_list: { path: "/api/v1/news/list/", method: "get" },
  api_v1_news_read: { path: "/api/v1/news/:id/", method: "get" },
  api_v1_orders_create: { path: "/api/v1/orders/", method: "post" },
  api_v1_permissions_admin_groups_list: { path: "/api/v1/permissions/admin/groups/", method: "get" },
  api_v1_permissions_admin_groups_create: { path: "/api/v1/permissions/admin/groups/", method: "post" },
  api_v1_permissions_admin_groups_users_list: { path: "/api/v1/permissions/admin/groups/:group_id/users/", method: "get" },
  api_v1_permissions_admin_groups_users_create: { path: "/api/v1/permissions/admin/groups/:group_id/users/", method: "post" },
  api_v1_permissions_admin_groups_users_delete: { path: "/api/v1/permissions/admin/groups/:group_id/users/:id/", method: "delete" },
  api_v1_permissions_admin_groups_read: { path: "/api/v1/permissions/admin/groups/:id/", method: "get" },
  api_v1_permissions_admin_groups_update: { path: "/api/v1/permissions/admin/groups/:id/", method: "put" },
  api_v1_permissions_admin_groups_partial_update: { path: "/api/v1/permissions/admin/groups/:id/", method: "patch" },
  api_v1_permissions_admin_groups_delete: { path: "/api/v1/permissions/admin/groups/:id/", method: "delete" },
  "api_v1_permissions_admin_menu-items_list": { path: "/api/v1/permissions/admin/menu-items/", method: "get" },
  api_v1_service_admin_dns_list_list: { path: "/api/v1/service/admin/dns/list/", method: "get" },
  api_v1_service_admin_dns_list_create: { path: "/api/v1/service/admin/dns/list/", method: "post" },
  api_v1_service_admin_dns_list_delete: { path: "/api/v1/service/admin/dns/list/", method: "delete" },
  api_v1_service_admin_domain_list_list: { path: "/api/v1/service/admin/domain/list/", method: "get" },
  api_v1_service_admin_domain_list_create: { path: "/api/v1/service/admin/domain/list/", method: "post" },
  api_v1_service_admin_domain_read: { path: "/api/v1/service/admin/domain/:id/", method: "get" },
  api_v1_service_admin_domain_update: { path: "/api/v1/service/admin/domain/:id/", method: "put" },
  api_v1_service_admin_domain_partial_update: { path: "/api/v1/service/admin/domain/:id/", method: "patch" },
  api_v1_service_admin_domain_delete: { path: "/api/v1/service/admin/domain/:id/", method: "delete" },
  api_v1_service_admin_ministra_list_list: { path: "/api/v1/service/admin/ministra/list/", method: "get" },
  api_v1_service_admin_ministra_list_create: { path: "/api/v1/service/admin/ministra/list/", method: "post" },
  api_v1_service_admin_ministra_read: { path: "/api/v1/service/admin/ministra/:id/", method: "get" },
  api_v1_service_admin_ministra_update: { path: "/api/v1/service/admin/ministra/:id/", method: "put" },
  api_v1_service_admin_ministra_partial_update: { path: "/api/v1/service/admin/ministra/:id/", method: "patch" },
  api_v1_service_admin_ministra_delete: { path: "/api/v1/service/admin/ministra/:id/", method: "delete" },
  "api_v1_service_admin_ministra_compare-channels_create": { path: "/api/v1/service/admin/ministra/:id/compare-channels/", method: "post" },
  "api_v1_service_admin_ministra_force-epg-reload_create": { path: "/api/v1/service/admin/ministra/:id/force-epg-reload", method: "post" },
  "api_v1_service_admin_ministra_update-channels_create": { path: "/api/v1/service/admin/ministra/:id/update-channels/", method: "post" },
  api_v1_service_admin_promocode_list_list: { path: "/api/v1/service/admin/promocode/list/", method: "get" },
  api_v1_service_admin_promocode_list_create: { path: "/api/v1/service/admin/promocode/list/", method: "post" },
  api_v1_service_admin_promocode_read: { path: "/api/v1/service/admin/promocode/:id/", method: "get" },
  api_v1_service_admin_promocode_delete: { path: "/api/v1/service/admin/promocode/:id/", method: "delete" },
  api_v1_service_admin_promocode_disable_create: { path: "/api/v1/service/admin/promocode/:id/disable", method: "post" },
  api_v1_service_admin_promocode_enable_create: { path: "/api/v1/service/admin/promocode/:id/enable", method: "post" },
  api_v1_service_admin_promocode_transactions_list: { path: "/api/v1/service/admin/promocode/:id/transactions", method: "get" },
  api_v1_service_admin_server_list_list: { path: "/api/v1/service/admin/server/list/", method: "get" },
  api_v1_service_admin_server_list_create: { path: "/api/v1/service/admin/server/list/", method: "post" },
  api_v1_service_admin_server_read: { path: "/api/v1/service/admin/server/:id/", method: "get" },
  api_v1_service_admin_server_update: { path: "/api/v1/service/admin/server/:id/", method: "put" },
  api_v1_service_admin_server_partial_update: { path: "/api/v1/service/admin/server/:id/", method: "patch" },
  api_v1_service_admin_server_delete: { path: "/api/v1/service/admin/server/:id/", method: "delete" },
  api_v1_service_dns_list_list: { path: "/api/v1/service/dns/list/", method: "get" },
  api_v1_service_dns_list_create: { path: "/api/v1/service/dns/list/", method: "post" },
  api_v1_service_dns_read: { path: "/api/v1/service/dns/:id/", method: "get" },
  api_v1_service_dns_update: { path: "/api/v1/service/dns/:id/", method: "put" },
  api_v1_service_dns_partial_update: { path: "/api/v1/service/dns/:id/", method: "patch" },
  api_v1_service_dns_delete: { path: "/api/v1/service/dns/:id/", method: "delete" },
  api_v1_service_domain_default_read: { path: "/api/v1/service/domain/default/", method: "get" },
  api_v1_service_domain_list_list: { path: "/api/v1/service/domain/list/", method: "get" },
  api_v1_service_ministra_list_list: { path: "/api/v1/service/ministra/list/", method: "get" },
  api_v1_service_promocode_apply_create: { path: "/api/v1/service/promocode/apply", method: "post" },
  api_v1_service_server_list_list: { path: "/api/v1/service/server/list/", method: "get" },
  "api_v1_service_system-settings_list": { path: "/api/v1/service/system-settings/", method: "get" },
  api_v1_user_admin_statistics_finance_list: { path: "/api/v1/user/admin/statistics/finance", method: "get" },
  "api_v1_user_admin_statistics_money_balance-users_list": { path: "/api/v1/user/admin/statistics/money/balance-users", method: "get" },
  api_v1_user_admin_statistics_money_general_list: { path: "/api/v1/user/admin/statistics/money/general", method: "get" },
  "api_v1_user_admin_statistics_money_payment-transactions_list": { path: "/api/v1/user/admin/statistics/money/payment-transactions", method: "get" },
  api_v1_user_admin_statistics_users_all_list: { path: "/api/v1/user/admin/statistics/users/all", method: "get" },
  api_v1_user_admin_statistics_users_devices_list: { path: "/api/v1/user/admin/statistics/users/devices", method: "get" },
  api_v1_user_admin_statistics_users_general_list: { path: "/api/v1/user/admin/statistics/users/general", method: "get" },
  api_v1_user_admin_statistics_users_referral_list: { path: "/api/v1/user/admin/statistics/users/referral", method: "get" },
  api_v1_user_admin_user_list: { path: "/api/v1/user/admin/user", method: "get" },
  api_v1_user_admin_user_read: { path: "/api/v1/user/admin/user/:id", method: "get" },
  api_v1_user_admin_user_partial_update: { path: "/api/v1/user/admin/user/:id", method: "patch" },
  api_v1_user_admin_user_balance_update: { path: "/api/v1/user/admin/user/:id/balance/", method: "put" },
  api_v1_user_admin_user_balance_partial_update: { path: "/api/v1/user/admin/user/:id/balance/", method: "patch" },
  api_v1_user_admin_user_block_list: { path: "/api/v1/user/admin/user/:id/block", method: "get" },
  api_v1_user_admin_user_block_create: { path: "/api/v1/user/admin/user/:id/block", method: "post" },
  api_v1_user_admin_user_block_actual_read: { path: "/api/v1/user/admin/user/:id/block/actual", method: "get" },
  api_v1_user_admin_user_block_read: { path: "/api/v1/user/admin/user/:id/block/:block_pk", method: "get" },
  api_v1_user_admin_user_block_update: { path: "/api/v1/user/admin/user/:id/block/:block_pk", method: "put" },
  api_v1_user_admin_user_block_partial_update: { path: "/api/v1/user/admin/user/:id/block/:block_pk", method: "patch" },
  api_v1_user_admin_user_device_list: { path: "/api/v1/user/admin/user/:id/device", method: "get" },
  api_v1_user_admin_user_device_read: { path: "/api/v1/user/admin/user/:id/device/:deviceId", method: "get" },
  api_v1_user_admin_user_device_update: { path: "/api/v1/user/admin/user/:id/device/:deviceId", method: "put" },
  "api_v1_user_admin_user_device_cancel-subscription_create": { path: "/api/v1/user/admin/user/:id/device/:deviceId/cancel-subscription/", method: "post" },
  "api_v1_user_admin_user_device_change-subscription_create": { path: "/api/v1/user/admin/user/:id/device/:deviceId/change-subscription/", method: "post" },
  "api_v1_user_admin_user_device_clear-ministra-user-theme_create": { path: "/api/v1/user/admin/user/:id/device/:deviceId/clear-ministra-user-theme/", method: "post" },
  "api_v1_user_admin_user_device_create-subscription_create": { path: "/api/v1/user/admin/user/:id/device/:deviceId/create-subscription/", method: "post" },
  api_v1_user_admin_user_device_logs_list: { path: "/api/v1/user/admin/user/:id/device/:deviceId/logs/", method: "get" },
  "api_v1_user_admin_user_device_refresh-ott-id_create": { path: "/api/v1/user/admin/user/:id/device/:deviceId/refresh-ott-id/", method: "post" },
  api_v1_user_admin_user_playlists_list: { path: "/api/v1/user/admin/user/:id/playlists", method: "get" },
  "api_v1_user_admin_user_raw-password_create": { path: "/api/v1/user/admin/user/:id/raw-password/", method: "post" },
  api_v1_user_admin_user_referrals_list: { path: "/api/v1/user/admin/user/:id/referrals", method: "get" },
  api_v1_user_admin_user_referrals_balance_read: { path: "/api/v1/user/admin/user/:id/referrals/balance", method: "get" },
  "api_v1_user_admin_user_referrals_balance_withdrawal-transactions_list": { path: "/api/v1/user/admin/user/:id/referrals/balance/withdrawal-transactions", method: "get" },
  "api_v1_user_admin_user_referrals_link-click-throughs_list": { path: "/api/v1/user/admin/user/:id/referrals/link-click-throughs", method: "get" },
  api_v1_user_admin_user_referrals_transactions_list: { path: "/api/v1/user/admin/user/:id/referrals/transactions", method: "get" },
  "api_v1_user_admin_user_send-email_create": { path: "/api/v1/user/admin/user/:id/send-email", method: "post" },
  api_v1_user_admin_withdrawal_systems_list: { path: "/api/v1/user/admin/withdrawal/systems", method: "get" },
  api_v1_user_admin_withdrawal_systems_create: { path: "/api/v1/user/admin/withdrawal/systems", method: "post" },
  api_v1_user_admin_withdrawal_systems_read: { path: "/api/v1/user/admin/withdrawal/systems/:id", method: "get" },
  api_v1_user_admin_withdrawal_systems_update: { path: "/api/v1/user/admin/withdrawal/systems/:id", method: "put" },
  api_v1_user_admin_withdrawal_systems_partial_update: { path: "/api/v1/user/admin/withdrawal/systems/:id", method: "patch" },
  api_v1_user_admin_withdrawal_systems_delete: { path: "/api/v1/user/admin/withdrawal/systems/:id", method: "delete" },
  api_v1_user_admin_withdrawal_transactions_list: { path: "/api/v1/user/admin/withdrawal/transactions", method: "get" },
  api_v1_user_admin_withdrawal_transactions_read: { path: "/api/v1/user/admin/withdrawal/transactions/:id", method: "get" },
  api_v1_user_admin_withdrawal_transactions_approve_create: { path: "/api/v1/user/admin/withdrawal/transactions/:id/approve", method: "post" },
  api_v1_user_admin_withdrawal_transactions_reject_create: { path: "/api/v1/user/admin/withdrawal/transactions/:id/reject", method: "post" },
  api_v1_user_block_read: { path: "/api/v1/user/block/", method: "get" },
  api_v1_user_block_list_list: { path: "/api/v1/user/block/list", method: "get" },
  api_v1_user_countries_list: { path: "/api/v1/user/countries/", method: "get" },
  api_v1_user_device_check_all_update: { path: "/api/v1/user/device/check_all/", method: "put" },
  api_v1_user_device_check_all_partial_update: { path: "/api/v1/user/device/check_all/", method: "patch" },
  api_v1_user_device_list_list: { path: "/api/v1/user/device/list/", method: "get" },
  api_v1_user_device_list_create: { path: "/api/v1/user/device/list/", method: "post" },
  api_v1_user_device_read: { path: "/api/v1/user/device/:id/", method: "get" },
  api_v1_user_device_update: { path: "/api/v1/user/device/:id/", method: "put" },
  api_v1_user_device_partial_update: { path: "/api/v1/user/device/:id/", method: "patch" },
  api_v1_user_device_delete: { path: "/api/v1/user/device/:id/", method: "delete" },
  api_v1_user_device_checked_create: { path: "/api/v1/user/device/:id/checked/", method: "post" },
  api_v1_user_device_clear_portal_user_theme_create: { path: "/api/v1/user/device/:id/clear_portal_user_theme/", method: "post" },
  api_v1_user_device_dns_read: { path: "/api/v1/user/device/:id/dns/", method: "get" },
  api_v1_user_device_dns_create: { path: "/api/v1/user/device/:id/dns/", method: "post" },
  api_v1_user_device_dns_delete: { path: "/api/v1/user/device/:id/dns/", method: "delete" },
  "api_v1_user_device_playlist-type_read": { path: "/api/v1/user/device/:id/playlist-type/", method: "get" },
  "api_v1_user_device_playlist-type_create": { path: "/api/v1/user/device/:id/playlist-type/", method: "post" },
  "api_v1_user_device_playlist-type_delete": { path: "/api/v1/user/device/:id/playlist-type/", method: "delete" },
  api_v1_user_device_refresh_ott_id_create: { path: "/api/v1/user/device/:id/refresh_ott_id/", method: "post" },
  api_v1_user_device_server_read: { path: "/api/v1/user/device/:id/server/", method: "get" },
  api_v1_user_device_server_create: { path: "/api/v1/user/device/:id/server/", method: "post" },
  api_v1_user_device_server_delete: { path: "/api/v1/user/device/:id/server/", method: "delete" },
  api_v1_user_device_subscription_auto_renew_create: { path: "/api/v1/user/device/:id/subscription_auto_renew/", method: "post" },
  api_v1_user_device_subscription_to_premium_create: { path: "/api/v1/user/device/:id/subscription_to_premium/", method: "post" },
  api_v1_user_device_view_type_create: { path: "/api/v1/user/device/:id/view_type/", method: "post" },
  "api_v1_user_frontend-language_create": { path: "/api/v1/user/frontend-language/", method: "post" },
  api_v1_user_info_read: { path: "/api/v1/user/info/", method: "get" },
  api_v1_user_meta_list: { path: "/api/v1/user/meta/", method: "get" },
  api_v1_user_notifications_list: { path: "/api/v1/user/notifications/", method: "get" },
  "api_v1_user_notifications_reading-all_create": { path: "/api/v1/user/notifications/reading-all", method: "post" },
  api_v1_user_notifications_reading_create: { path: "/api/v1/user/notifications/:id/reading", method: "post" },
  "api_v1_user_personal-notifications_list": { path: "/api/v1/user/personal-notifications/", method: "get" },
  "api_v1_user_personal-notifications_reading-all_create": { path: "/api/v1/user/personal-notifications/reading-all", method: "post" },
  "api_v1_user_personal-notifications_reading_create": { path: "/api/v1/user/personal-notifications/:id/reading", method: "post" },
  api_v1_user_profile_update: { path: "/api/v1/user/profile/", method: "put" },
  api_v1_user_profile_partial_update: { path: "/api/v1/user/profile/", method: "patch" },
  api_v1_user_profile_delete: { path: "/api/v1/user/profile/", method: "delete" },
  "api_v1_user_profile_change-email_create": { path: "/api/v1/user/profile/change-email", method: "post" },
  "api_v1_user_profile_change-email-request-current_create": { path: "/api/v1/user/profile/change-email-request-current", method: "post" },
  "api_v1_user_profile_change-email-request-new_create": { path: "/api/v1/user/profile/change-email-request-new", method: "post" },
  "api_v1_user_profile_delete-account_create": { path: "/api/v1/user/profile/delete-account", method: "post" },
  "api_v1_user_profile_unsubscribe-mail-list_create": { path: "/api/v1/user/profile/unsubscribe-mail-list", method: "post" },
  "api_v1_user_profile_withdrawal-wallets_list": { path: "/api/v1/user/profile/withdrawal-wallets", method: "get" },
  "api_v1_user_profile_withdrawal-wallets_create": { path: "/api/v1/user/profile/withdrawal-wallets", method: "post" },
  "api_v1_user_profile_withdrawal-wallets_confirm_create": { path: "/api/v1/user/profile/withdrawal-wallets/confirm", method: "post" },
  "api_v1_user_profile_withdrawal-wallets_read": { path: "/api/v1/user/profile/withdrawal-wallets/:id", method: "get" },
  "api_v1_user_profile_withdrawal-wallets_update": { path: "/api/v1/user/profile/withdrawal-wallets/:id", method: "put" },
  "api_v1_user_profile_withdrawal-wallets_partial_update": { path: "/api/v1/user/profile/withdrawal-wallets/:id", method: "patch" },
  "api_v1_user_profile_withdrawal-wallets_delete": { path: "/api/v1/user/profile/withdrawal-wallets/:id", method: "delete" },
  api_v1_user_referrals_list: { path: "/api/v1/user/referrals/", method: "get" },
  "api_v1_user_referrals_balance-transfer_create": { path: "/api/v1/user/referrals/balance-transfer", method: "post" },
  api_v1_user_referrals_balance_transactions_list: { path: "/api/v1/user/referrals/balance/transactions", method: "get" },
  "api_v1_user_referrals_balance_withdrawal-transactions_list": { path: "/api/v1/user/referrals/balance/withdrawal-transactions", method: "get" },
  "api_v1_user_referrals_balance_withdrawal-transactions_create": { path: "/api/v1/user/referrals/balance/withdrawal-transactions", method: "post" },
  "api_v1_user_referrals_balance_withdrawal-transactions_read": { path: "/api/v1/user/referrals/balance/withdrawal-transactions/:id", method: "get" },
  "api_v1_user_referrals_balance_withdrawal-transactions_update": { path: "/api/v1/user/referrals/balance/withdrawal-transactions/:id", method: "put" },
  "api_v1_user_referrals_balance_withdrawal-transactions_partial_update": { path: "/api/v1/user/referrals/balance/withdrawal-transactions/:id", method: "patch" },
  "api_v1_user_referrals_balance_withdrawal-transactions_delete": { path: "/api/v1/user/referrals/balance/withdrawal-transactions/:id", method: "delete" },
  "api_v1_user_referrals_link-click-throughs_list": { path: "/api/v1/user/referrals/link-click-throughs", method: "get" },
  api_v1_user_referrals_statistics_read: { path: "/api/v1/user/referrals/statistics", method: "get" },
  api_v1_user_referrals_transactions_list: { path: "/api/v1/user/referrals/transactions", method: "get" },
  api_v1_user_timezone_list: { path: "/api/v1/user/timezone/", method: "get" },
  api_v1_user_withdrawal_systems_list: { path: "/api/v1/user/withdrawal/systems", method: "get" },
  api_v1_user_withdrawal_systems_read: { path: "/api/v1/user/withdrawal/systems/:id", method: "get" },
  api_external_v1_app_hwid_create: { path: "/api_external/v1/app/hwid/", method: "post" },
  api_external_v1_app_read: { path: "/api_external/v1/app/:hwid/", method: "get" },
  "api_external_v1_bpl-data_list": { path: "/api_external/v1/bpl-data/", method: "get" },
  "api_external_v1_das-data_list": { path: "/api_external/v1/das-data/", method: "get" },
  "api_external_v1_dns-list_list": { path: "/api_external/v1/dns-list/", method: "get" },
  api_external_v1_playlist_read: { path: "/api_external/v1/playlist/:ott_id/:fmt/", method: "get" },
  api_external_v1_playlist_file_list: { path: "/api_external/v1/playlist/:ott_id/:fmt/file/", method: "get" },
  api_external_v1_user_ottid_list: { path: "/api_external/v1/user/ottid/", method: "get" },
} as const
