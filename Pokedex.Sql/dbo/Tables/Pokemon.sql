CREATE TABLE [dbo].[Pokemon] (
    [Id]             INT           NOT NULL,
    [Name]           NVARCHAR (50) NOT NULL,
    [Type]           NVARCHAR (50) NULL,
    [HitPoints]      INT           NULL,
    [Attack]         INT           NULL,
    [Defense]        INT           NULL,
    [SpecialAttack]  INT           NULL,
    [SpecialDefense] INT           NULL,
    [Speed]          INT           NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC)
);

