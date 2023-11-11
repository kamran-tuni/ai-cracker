from typing import Dict
from sqlalchemy.orm import Session
from app.models.app_config import AppConfig

import json


class AppConfigService:
    def __init__(self, db_session: Session):
        """
        Initialize the AppConfigService with a database session.

        Args:
            db_session (Session): The database session instance.
        """
        self.db_session = db_session

    def add_or_update_config(self, config_data: Dict) -> AppConfig:
        """
        Add or update the application configuration.

        Args:
            config_data (Dict): A dictionary containing the app configuration data.

        Returns:
            AppConfig: The saved or updated AppConfig object.
        """
        # Attempt to find existing config
        app_config = self.db_session.query(AppConfig).first()

        # If no existing config, create a new one
        if app_config is None:
            app_config = AppConfig()
            self.db_session.add(app_config)

        # Update fields
        if config_data.get("news_sources"):
            app_config.news_sources = json.dumps(config_data["news_sources"])
        if config_data.get("keywords"):
            app_config.keywords = json.dumps(config_data["keywords"])
        if config_data.get("industries"):
            app_config.industries = json.dumps(config_data["industries"])
        if config_data.get("ai_model_endpoint"):
            app_config.ai_model_endpoint = config_data["ai_model_endpoint"]
        if config_data.get("ai_model_version"):
            app_config.ai_model_version = config_data["ai_model_version"]
        if config_data.get("ai_model_api_key"):
            app_config.ai_model_api_key = config_data["ai_model_api_key"]

        # Commit the changes
        self.db_session.commit()

        return app_config
