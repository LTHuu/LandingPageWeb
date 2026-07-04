using backend.Data;
using backend.Repository;
using backend.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(
        builder.Configuration.GetConnectionString("DefaultConnection")
    ));

builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
//builder.Services.AddOpenApi();
builder.Services.AddScoped<IfaqRepository, faqRepository>();
builder.Services.AddScoped<ISubmitRepository, SubmitRepository>();
builder.Services.AddScoped<IfaqServices, faqServices>();
builder.Services.AddScoped<ISubmitServices, SubmitServices>();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowNextJS", policy =>
    {
        policy.WithOrigins("http://localhost:3000")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
var enableSwagger = app.Configuration.GetValue("EnableSwagger", true);
if (enableSwagger)
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "backend v1");
    });
    app.MapGet("/swagger", () => Results.Redirect("/swagger/index.html"));
}

app.UseHttpsRedirection();

app.UseCors("AllowNextJS");

app.UseAuthorization();

app.MapControllers();

app.Run();
